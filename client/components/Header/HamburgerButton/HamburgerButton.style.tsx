import styled from '@emotion/styled';
import React from 'react';

export const clickedClassName = 'clicked';

export const StyledButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
`;

export const StyledLines = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: #939292;
  border-radius: 0.3rem;

  &:nth-last-of-type(1) {
    transition: all 0.25s ease-in-out;
  }

  &:nth-of-type(2) {
    left: 0;
    width: 100%;
    transition: all 0.1s ease-in-out;
  }

  &:nth-last-of-type(3) {
    transition: all 0.25s ease-in-out;
  }

  &.${clickedClassName} {
    &:nth-of-type(1) {
      transform: rotate(45deg) translate(0.4rem, 0.8rem);
    }

    &:nth-of-type(2) {
      left: 100%;
      width: 0;
    }

    &:nth-of-type(3) {
      transform: rotate(-45deg) translate(0.4rem, -0.8rem);
    }
  }
`;

export const StyledHamburgerButton = ({
  onClickHandler,
  isSideBarOpen,
}: {
  onClickHandler: () => void;
  isSideBarOpen: boolean;
}) => {
  return (
    <StyledButton onClick={onClickHandler}>
      <StyledLines
        className={isSideBarOpen ? clickedClassName : ''}
        key={'1'}
      />
      <StyledLines
        className={isSideBarOpen ? clickedClassName : ''}
        key={'2'}
      />
      <StyledLines
        className={isSideBarOpen ? clickedClassName : ''}
        key={'3'}
      />
    </StyledButton>
  );
};
