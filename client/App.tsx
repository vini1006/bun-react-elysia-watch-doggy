import styled from '@emotion/styled';

import SideBar from '@@/components/SideBar/SideBar';
import Header from '@@/components/Header/Header';
import Body from '@@/components/Body';

const App = () => {
  return (
    <StyledContainer>
      <SideBar />
      <Header />
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
