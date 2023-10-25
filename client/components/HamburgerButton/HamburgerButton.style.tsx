import styled from '@emotion/styled';
import { hamburgerIndex } from '@@/style/zIndex';

const animationTiming = '200ms ease-in-out';
const barWidth = 35;
const barHeight = 4;
const hamburgerGap = 10;
const buttonColor = '#ffffff';
const clickedButtonColor = '#2c2a2a';

export const hamburgerHeight = barHeight * 3 + hamburgerGap * 2;
const xWidth = hamburgerHeight * Math.sqrt(2);

const StyledButton = styled.button`
  z-index: ${hamburgerIndex};
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 9999px;
  padding: 8px 8px;
  display: flex;
  flex-direction: column;
  gap: ${hamburgerGap}px;
  align-content: center;

  &::before,
  & > div,
  &::after {
    content: '';
    box-sizing: border-box;
    width: ${barWidth}px;
    height: ${barHeight}px;
    background-color: ${buttonColor};
    border-radius: 9999px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    transform-origin: left center;
    transition:
      background-color ${animationTiming},
      opacity ${animationTiming},
      width ${animationTiming},
      rotate ${animationTiming},
      translate ${animationTiming};
  }

  &.clicked::before,
  &.clicked::after,
  &.clicked > div {
    background-color: ${clickedButtonColor};
  }

  &.clicked::before {
    rotate: 45deg;
    width: ${xWidth}px;
    translate: 15% ${barHeight / -2}px;
  }

  &.clicked > div {
    opacity: 0;
    width: 0;
  }

  &.clicked::after {
    rotate: -45deg;
    width: ${xWidth}px;
    translate: 15% ${barHeight / 2}px;
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
    <StyledButton
      className={isSideBarOpen ? 'clicked' : ''}
      onClick={onClickHandler}
    >
      <div />
    </StyledButton>
  );
};
