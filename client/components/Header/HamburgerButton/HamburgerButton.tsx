import React from 'react';

import {
  useIsSidebarOpened,
  useSidebarActions,
} from '@@/store/sidebar/sidebar';

import { StyledHamburgerButton } from './HamburgerButton.style';

const HamburgerButton = () => {
  const isSideBarOpen = useIsSidebarOpened();
  const { setIsOpened } = useSidebarActions();

  return (
    <StyledHamburgerButton
      isSideBarOpen={isSideBarOpen}
      onClickHandler={() => setIsOpened(!isSideBarOpen)}
    />
  );
};

export default HamburgerButton;
