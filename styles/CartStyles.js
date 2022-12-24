import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 101;
  display: flex;
  justify-content: flex-end;
  /* background: red; */
  /* display: none; */
`;

export const CartStyle = styled.div`
  background: white;
  width: 40%;
  position: relative;
  overflow-y: scroll;
`;

export const EmptyElement = styled.div`
  display: flex;
  color: #535353;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translate(0, -5%);
  svg {
    font-size: 10rem;
    color: #535353;
  }
`;

export const CartCard = styled.div`
  display: flex;
  width: 95%;
  padding: 1rem 3rem;
  flex-direction: column;
  background: white;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 1.5rem;
  box-shadow: rgb(88 80 80 / 10%) 0px 20px 25px -5px,
    rgb(56 56 56 / 4%) 0px 10px 10px -5px;
`;

export const CardModel = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 1rem;
  /* background-color: white; */
  /* background: #white; */

  display: flex;
  justify-content: space-between;
`;

export const CartCardImage = styled.div`
  width: 40%;
`;

export const CartCardDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  margin-left: 0.5rem;

  button {
    border: none;
    background: transparent;
    font-size: 1.2rem;
    margin: 0px 0.7rem;
  }
`;

export const Hr = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;
