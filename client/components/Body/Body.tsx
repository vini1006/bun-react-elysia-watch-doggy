import { StyledContainer } from './Body.style';
import Card from './Card/Card';

const Body = () => {
  return (
    <StyledContainer id={'wow'}>
      <Card gridColumn={'1 / 3'} />
      <Card />
      <Card />
    </StyledContainer>
  );
};

export default Body;
