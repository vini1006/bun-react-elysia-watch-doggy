import { styled } from '@@/adaptor/emotion';
import logoImg from '@@/assets/img/logo.svg';

export default styled.button`
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 2rem;
  height: 2rem;
`;
