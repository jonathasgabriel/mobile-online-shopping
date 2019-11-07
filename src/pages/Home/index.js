import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);

    // navigation.navigate('Cart', id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <AddProductButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, []),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
