import React, { useEffect, useRef, useState } from 'react';

import { useIsSidebarOpened } from '@@/store/sidebar/sidebar';

import ButtonArea from './ButtonArea';

import {
  Container,
  hideClassName as styleHideClassName,
} from './SideBar.style';

const SideBar = () => {
  const sideBarRef = useRef<HTMLDialogElement>(null);
  const { opened, hideClassName } = useSideBarControl();

  return (
    <Container ref={sideBarRef} open={opened} className={hideClassName}>
      <h3
        style={{
          margin: '1rem 1rem 1rem 1rem',
        }}
      >
        TRYING TO TEST DIALOG HERE WTF
      </h3>
      <ButtonArea />
    </Container>
  );
};

export default SideBar;

const useSideBarControl = () => {
  const isSideBarOpen = useIsSidebarOpened();
  const [opened, setOpened] = useState(false);
  const [hideClassName, setHideClassName] = useState('' as string);

  useEffect(() => {
    if (isSideBarOpen) {
      setOpened(true);
      setHideClassName('');
    } else {
      setHideClassName(styleHideClassName);
      setTimeout(() => setOpened(false), 250);
    }
  }, [isSideBarOpen]);

  return {
    opened,
    hideClassName,
  };
};
