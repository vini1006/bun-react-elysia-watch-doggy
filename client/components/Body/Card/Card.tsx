import { StyledCard } from './Card.style';

const Card = ({ gridColumn }: { gridColumn?: string }) => {
  return <StyledCard gridColumn={gridColumn}></StyledCard>;
};

export default Card;
