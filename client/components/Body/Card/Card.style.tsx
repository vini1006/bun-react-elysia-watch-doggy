import styled from '@emotion/styled';

export const StyledCard = styled.div<{
  gridColumn?: string;
}>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  ${(props) => props.gridColumn && `grid-column: ${props.gridColumn};`}
`;
