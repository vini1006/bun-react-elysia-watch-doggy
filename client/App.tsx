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
      <StyledContainer>
        <SideBar />
        <HamburgerButton />
        <Header />
        <Body />
        <Footer />
      </StyledContainer>
    </>
  );
};

export default App;

const StyledContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 6vh minmax(300px, 7fr) 4fr;
  width: 100vw;
  height: ${get100viewHeight()};
  background: rgb(55, 45, 227);
  background: linear-gradient(
    199deg,
    rgba(55, 45, 227, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;
