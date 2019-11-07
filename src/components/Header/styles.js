import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  height: 120px;
  flex-direction: row;
  background: #191920;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  flex-direction: row;
`;

export const ItemCount = styled.Text`
  background: #7159c1;
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
