import { StyledContainer } from './Body.style';
import Card from './Card/Card';

import Profile from './Profile/Profile';

const Body = () => {
  return (
    <StyledContainer id={'wow'}>
      <Card gridColumn={'1 / 3'}>
        <Profile />
      </Card>
      <Card gridColumn={'1 / 3'}>
        <div></div>
      </Card>
    </StyledContainer>
  );
};

export default Body;
