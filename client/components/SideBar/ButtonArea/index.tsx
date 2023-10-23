import styled from '@emotion/styled';
import SideBarButton from './SideBarButton';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArea = () => {
  return (
    <StyledContainer>
      <SideBarButton text={'1st button'} key={'1'} />
      <SideBarButton text={'2st button'} key={'2'} />
      <SideBarButton text={'3st button'} key={'3'} />
      <SideBarButton text={'4st button'} key={'4'} />
    </StyledContainer>
  );
};

export default ButtonArea;
