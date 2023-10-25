import { useEffect } from 'react';
import styled from '@emotion/styled';

import setScreenHeight, { get100viewHeight } from '@@/style/screenHeight';

import HamburgerButton from '@@/components/HamburgerButton/HamburgerButton';
import SideBar from '@@/components/SideBar/SideBar';
import Header from '@@/components/Header/Header';
import Body from '@@/components/Body/Body';
import Footer from '@@/components/Footer/Footer';

const App = () => {
  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);
  return (
    <>
      <HamburgerButton />
      <SideBar />
      <StyledContainer>
        <Header />
        <Body />
        <Footer />
      </StyledContainer>
    </>
  );
};

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${get100viewHeight()};
  background-color: #303459;
`;
