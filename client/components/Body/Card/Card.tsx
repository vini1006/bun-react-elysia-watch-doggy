import { StyledCard } from './Card.style';
import React from 'react';

const Card = ({
  gridColumn,
  children,
}: {
  gridColumn?: string;
  children: React.ReactNode;
}) => {
  return <StyledCard gridColumn={gridColumn}>{children}</StyledCard>;
};

export default Card;
