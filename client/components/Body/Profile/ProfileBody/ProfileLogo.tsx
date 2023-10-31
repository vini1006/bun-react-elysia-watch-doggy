import styled from '@emotion/styled';
import img from '../../../../assets/img/profile-img-sample.png';

const StyledDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 0.3rem solid #fff;
  background-color: transparent;
  left: calc(100% - 2.5rem);
  top: calc(50% - 2.5rem);
  z-index: 1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileLogo = () => <StyledDiv />;

export default ProfileLogo;
