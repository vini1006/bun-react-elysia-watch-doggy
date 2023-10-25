import React, { useRef } from 'react';

import { useIsSidebarOpened } from '@@/store/sidebar/sidebar';

import ButtonArea from './ButtonArea';

import { Container } from './SideBar.style';

const SideBar = () => {
  const sideBarRef = useRef<HTMLDialogElement>(null);
  const opened = useIsSidebarOpened();

  return (
    <Container ref={sideBarRef} open={opened}>
      <h3
        style={{
          margin: '1rem 1rem 1rem 1rem',
        }}
      >
        Nice To Meet You
      </h3>
      <ButtonArea />
    </Container>
  );
};

export default SideBar;
