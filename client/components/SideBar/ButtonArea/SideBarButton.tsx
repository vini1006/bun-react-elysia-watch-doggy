import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const SideBarButton = ({ text }: { text: string }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default SideBarButton;
