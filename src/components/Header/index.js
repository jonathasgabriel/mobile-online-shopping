import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux';

import logo from '../../assets/logo.png';
import { Wrapper, Logo, Cart, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
