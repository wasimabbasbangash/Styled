import styled from "styled-components";

export const DetailPage = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  img {
    width: 40%;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  padding: 20px 20px;
  h1 {
    margin-bottom: 10px;
  }
  p {
    color: grey;
    text-overflow: clip;
  }
`;

export const QuantityButtons = styled.div`
  margin-top: 20px;
  display: flex;
  color: black;
  align-items: center;

  .quantitity-increment {
    display: flex;
    align-items: center;
  }
`;

export const CartButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  background-color: black;
  cursor: pointer;
`;

export const Price = styled.span`
  float: right;
  font-weight: bold;
`;
