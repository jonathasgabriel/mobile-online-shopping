import styled from 'styled-components/native';
import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ItemContainer = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
`;
export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddProductButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const BasketIconContainer = styled.View`
  flex-direction: row;
  background: ${darken(0.03, '#7159c1')};
  align-items: center;
  padding: 12px;
`;
export const IconText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  flex: 1;
`;
