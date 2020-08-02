import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar } from '@material-ui/core';

import { HeaderWrapper, Title } from './styles';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <HeaderWrapper>
        <Link to="/">
          <Title>Lista de Compras</Title>
        </Link>
      </HeaderWrapper>
    </AppBar>
  );
}

export default Header;