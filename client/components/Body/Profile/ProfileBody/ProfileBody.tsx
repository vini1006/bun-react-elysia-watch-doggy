import styled from '@emotion/styled';

import ProfileLeft from '@@/components/Body/Profile/ProfileBody/ProfileLeft/ProfileLeft';

const StyledContainer = styled.section`
  display: flex;
  height: 85%;
`;

const ProfileBody = () => {
  return (
    <StyledContainer>
      <ProfileLeft />
    </StyledContainer>
  );
};

export default ProfileBody;
