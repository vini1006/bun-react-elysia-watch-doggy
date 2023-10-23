import 'normalize.css';
import styled from '@emotion/styled';

import SideBar from '@@/components/SideBar';
import Header from '@@/components/Header';
import Body from '@@/components/Body';
import { useRef, useState } from 'react';
import { useSideBarControl } from '@@/components/SideBar/hooks/useSideBarControl';

const App = () => {
  const { sideBarRef, isSideBarOpen, toggleSideBar } = useSideBarControl();
  return (
    <StyledContainer>
      <SideBar sideBarRef={sideBarRef} />
      <Header
        isSideBarOpen={isSideBarOpen}
        openCloseSideBar={() => toggleSideBar()}
      />
      <Body />
    </StyledContainer>
  );
};

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
