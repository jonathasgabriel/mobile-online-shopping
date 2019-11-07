import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';
import { Wrapper, Logo, Cart, ItemCount } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Logo source={logo} />
      <Cart>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>4</ItemCount>
      </Cart>
    </Wrapper>
  );
}
