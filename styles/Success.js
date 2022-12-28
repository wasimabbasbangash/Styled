import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  img {
    z-index: -10;
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 35%;
    max-height: 80%;
    transform: scaleX(-1);
  }
`;

export const InsideContainer = styled.div`
  z-index: 5;
  background: transparent;

  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    text-align: center;
  }

  .address,
  .product {
    width: 80%;
    margin: 1rem auto;

    p {
      display: flex;
      justify-content: space-between;
    }

    h2 {
    }
  }

  button {
    display: block;
    width: 80%;
    margin: auto;
    background: #535353;
    color: white;
    padding: 0.5rem;
    border: none;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
