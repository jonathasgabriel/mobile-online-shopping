import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductList>
        <CardWrapper>
          <ProductInfo>
            <ProductImage />
            <ProductDetails>
              <ProductName />
              <ProductPrice />
              <Icon name="add-shopping-cart" color="#FFF" size={25} />
            </ProductDetails>
          </ProductInfo>
          <QuantityPriceContainer>
            <ProductQuantity>
              <Icon name="add-shopping-cart" color="#FFF" size={25} />
              <Quantity />
              <Icon name="add-shopping-cart" color="#FFF" size={25} />
            </ProductQuantity>
            <ProductTotalPrice />
          </QuantityPriceContainer>
        </CardWrapper>
      </ProductList>
      <TotalText />
      <TotalPrice />
      <CheckoutButton />
    </Container>
  );
}
