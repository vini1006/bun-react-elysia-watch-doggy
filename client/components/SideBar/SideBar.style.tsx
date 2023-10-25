import styled from '@emotion/styled';
import { sideBarIndex } from '@@/style/zIndex';
import { hamburgerHeight } from '@@/components/HamburgerButton/HamburgerButton.style';

export const Container = styled.dialog`
  width: 70vw;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border: none;
  z-index: ${sideBarIndex};
  flex-direction: column;
  padding: ${hamburgerHeight + 20}px 0;

  &[open] {
    animation: slideInFromLeft 0.7s ease normal;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(0%);
    }
  }

  &::backdrop {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  }
`;
