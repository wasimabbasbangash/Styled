import styled from "styled-components";

export const ModelStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
  h3 {
  }
  h2 {
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
