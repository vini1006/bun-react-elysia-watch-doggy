import styled from '@emotion/styled';

export const StyledContainer = styled.main`
  width: 100%;
  max-height: 100%;
  padding: 10px 10px;
  display: grid;
  column-gap: 5px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 10px;
  overflow-y: scroll;
`;
