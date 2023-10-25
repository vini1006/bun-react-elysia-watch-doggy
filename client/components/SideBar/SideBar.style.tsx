import styled from '@emotion/styled';

const slideOutAnimationName = 'slideOut';
export const hideClassName = 'hide';

export const Container = styled.dialog`
  width: 70vw;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border: none;
  z-index: 1;
  flex-direction: column;

  &[open] {
    animation: slideInFromLeft 0.7s ease normal;
  }

  &.${hideClassName} {
    animation: ${slideOutAnimationName} 0.3s ease normal;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes ${slideOutAnimationName} {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-110%);
    }
  }

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;
