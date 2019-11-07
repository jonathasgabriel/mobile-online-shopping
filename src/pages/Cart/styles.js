import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const CardWrapper = styled.View``;
export const ProductInfo = styled.View``;
export const ProductDetails = styled.View``;
export const ProductName = styled.Text``;
export const ProductImage = styled.Image``;
export const ProductPrice = styled.Text``;
export const QuantityPriceContainer = styled.View``;
export const ProductQuantity = styled.View``;
export const Quantity = styled.Text``;
export const ProductTotalPrice = styled.Text``;
export const TotalText = styled.Text``;
export const TotalPrice = styled.Text``;
export const CheckoutButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  margin: 8px 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  overflow: hidden;
`;
