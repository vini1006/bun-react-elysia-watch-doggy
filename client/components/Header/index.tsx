import React from 'react';
import { styled } from '@@/adaptor/emotion';

import HamburgerButton from './HamburgerButton';
import LogoButton from './LogoButton';

const StyledHeader = styled.header`
  background-color: #4e4e4e;
  height: 9vh;
  padding: 0 1rem;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
`;

const Header = ({
  isSideBarOpen,
  openCloseSideBar,
}: {
  isSideBarOpen: boolean;
  openCloseSideBar: () => void;
}) => (
  <StyledHeader>
    <HamburgerButton
      isSideBarOpen={isSideBarOpen}
      openCloseSideBar={() => openCloseSideBar()}
    ></HamburgerButton>
  </StyledHeader>
);

export default Header;
