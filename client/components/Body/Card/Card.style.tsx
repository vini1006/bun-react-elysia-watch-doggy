import styled from '@emotion/styled';

export const StyledCard = styled.div<{
  gridColumn?: string;
}>`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  ${(props) => props.gridColumn && `grid-column: ${props.gridColumn};`}
`;
