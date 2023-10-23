import styled from '@emotion/styled';
import React from 'react';

import ButtonArea from './ButtonArea';

const Container = styled.dialog`
  width: 70vw;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border: none;
  z-index: 1;
  display: flex;
  flex-direction: column;

  &[open] {
    animation: slideInFromLeft 0.7s ease normal;
  }

  &.hide {
    animation: slideOut 0.5s ease normal;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
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

const SideBar = ({
  sideBarRef,
}: {
  sideBarRef: React.RefObject<HTMLDialogElement>;
}) => {
  return (
    <Container ref={sideBarRef}>
      <h3
        style={{
          margin: '1rem 1rem 1rem 1rem',
        }}
      >
        TRYING TO TEST DIALOG HERE WTF
      </h3>
      <ButtonArea />
    </Container>
  );
};

export default SideBar;
