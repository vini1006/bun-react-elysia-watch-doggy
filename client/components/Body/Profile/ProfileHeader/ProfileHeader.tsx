import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  height: 15%;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`;

const ProfileHeader = () => (
  <StyledHeader>안녕하세요 유저!, 반갑습니다.</StyledHeader>
);

export default ProfileHeader;
