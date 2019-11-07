import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native';

import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import { Wrapper, Logo, Cart, ItemCount } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
        <Cart>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </Cart>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
}
