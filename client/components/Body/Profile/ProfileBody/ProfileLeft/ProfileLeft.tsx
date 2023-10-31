import styled from '@emotion/styled';
import ProfileLogo from '@@/components/Body/Profile/ProfileBody/ProfileLogo';

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const ProfileLeft = () => (
  <StyledDiv>
    <ProfileLogo />
  </StyledDiv>
);

export default ProfileLeft;
