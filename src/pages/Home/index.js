import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ItemContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddProductButton,
  BasketIconContainer,
  IconText,
  ButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, [])
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal
        renderItem={({ item }) => (
          <ItemContainer key={item.id}>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title} </ProductTitle>
            <ProductPrice>{item.formattedPrice}</ProductPrice>
            <AddProductButton onPress={() => handleAddProduct(item.id)}>
              <BasketIconContainer>
                <Icon name="add-shopping-cart" color="#FFF" size={25} />
                <IconText>{amount[item.id] || 0}</IconText>
              </BasketIconContainer>
              <ButtonText>Add to Cart</ButtonText>
            </AddProductButton>
          </ItemContainer>
        )}
      />
    </Container>
  );
}
