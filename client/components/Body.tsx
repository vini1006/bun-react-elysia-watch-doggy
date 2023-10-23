import { useState } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100px;
  height: 20px;
  border: 1px solid black;
`;
const Body = () => {
  const [showImage, setShowImage] = useState(false);
  return (
    <>
      <StyledButton onClick={() => setShowImage((b) => !b)}>Hello</StyledButton>
    </>
  );
};

export default Body;
