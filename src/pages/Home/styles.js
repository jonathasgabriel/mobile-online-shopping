import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ItemContainer = styled.View`
  align-items: center;
  margin: 0 20px 30px;
  background: #ffffff;
  margin-bottom: 300px;
  border-radius: 10px;
`;
export const ProductImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 32px;
  background: #ffffff;
  max-height: 300px;
  max-width: 300px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const AddProductButton = styled(RectButton)`
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

export const BasketIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;
export const IconText = styled.Text``;
export const ButtonText = styled.Text`
  font-size: 25px;
  margin: 0 15px;
`;
