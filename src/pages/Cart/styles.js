import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const CardWrapper = styled.View``;
export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
export const ProductDetails = styled.View``;
export const ProductName = styled.Text`
  width: 163px;
  height: 36px;
  font-size: 14px;
  font-weight: normal;
  color: #333333;
`;
export const ProductImage = styled.Image`
  background: #fff;
  width: 80px;
  height: 80px;
`;
export const ProductPrice = styled.Text`
  width: 70px;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;
export const QuantityPriceContainer = styled.View`
  flex-direction: row;
  height: 50px;
  border-radius: 4px;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
  background-color: #eeeeee;
`;
export const ProductQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Quantity = styled.Text`
  width: 51px;
  height: 26px;
  text-align: center;
  padding: 5px 5px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;
export const ProductTotalPrice = styled.Text`
  width: 70px;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const TotalsWrapper = styled.View`
  justify-content: center;
`;

export const TotalText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #999999;
`;
export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;

export const RemoveButton = styled(RectButton)`
  width: 315px;
  height: 100px;
  margin: 8px 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: space-between;
  height: 20px;
  align-items: center;
  overflow: hidden;
`;

export const CheckoutButton = styled(RectButton)`
  margin: 8px 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  color: #ffffff;
`;

export const NoProductText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
