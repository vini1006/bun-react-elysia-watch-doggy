import React from 'react';

import HamburgerButton from './HamburgerButton/HamburgerButton';
import { StyledHeader } from './Header.style';
import LogoButton from './LogoButton';

const Header = () => (
  <StyledHeader>
    <HamburgerButton />
  </StyledHeader>
);

export default Header;
