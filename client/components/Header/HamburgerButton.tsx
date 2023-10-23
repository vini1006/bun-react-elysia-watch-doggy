import styled from '@emotion/styled';
import { useState } from 'react';

const StyledHamburger = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
`;

const StyledLines = styled.div`
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

  &.clicked {
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

const HamburgerButton = ({
  isSideBarOpen,
  openCloseSideBar,
}: {
  isSideBarOpen: boolean;
  openCloseSideBar: () => void;
}) => {
  return (
    <StyledHamburger
      onClick={() => {
        openCloseSideBar();
      }}
    >
      <StyledLines className={isSideBarOpen ? 'clicked' : ''} key={'1'} />
      <StyledLines className={isSideBarOpen ? 'clicked' : ''} />
      <StyledLines className={isSideBarOpen ? 'clicked' : ''} />
    </StyledHamburger>
  );
};

export default HamburgerButton;
