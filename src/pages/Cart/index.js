import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  CardWrapper,
  ProductInfo,
  ProductDetails,
  ProductName,
  ProductImage,
  ProductPrice,
  QuantityPriceContainer,
  ProductQuantity,
  Quantity,
  ProductTotalPrice,
  TotalText,
  TotalPrice,
  CheckoutButton,
  ButtonText,
  TotalsWrapper,
  NoProductText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return cart.length ? (
    <Container>
      <ProductList
        data={cart}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <CardWrapper key={item.id}>
            <ProductInfo>
              <ProductImage source={{ uri: item.image }} />
              <ProductDetails>
                <ProductName>{item.title} </ProductName>
                <ProductPrice>{item.price}</ProductPrice>
              </ProductDetails>
              <TouchableWithoutFeedback onPress={() => removeFromCart(item.id)}>
                <Icon name="remove-shopping-cart" color="#7159c1" size={25} />
              </TouchableWithoutFeedback>
            </ProductInfo>
            <QuantityPriceContainer>
              <ProductQuantity>
                <TouchableWithoutFeedback onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={25}
                  />
                </TouchableWithoutFeedback>
                <Quantity>{item.amount}</Quantity>

                <TouchableWithoutFeedback onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" color="#7159c1" size={25} />
                </TouchableWithoutFeedback>
              </ProductQuantity>
              <ProductTotalPrice>{item.subtotal}</ProductTotalPrice>
            </QuantityPriceContainer>
          </CardWrapper>
        )}
      />
      <TotalsWrapper>
        <TotalText>Total</TotalText>
        <TotalPrice>{total}</TotalPrice>
      </TotalsWrapper>

      <CheckoutButton>
        <ButtonText>Checkout</ButtonText>
      </CheckoutButton>
    </Container>
  ) : (
    <Container>
      <NoProductText>No products added</NoProductText>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
