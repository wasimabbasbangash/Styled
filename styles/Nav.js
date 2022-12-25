import styled from "styled-components";
const { motion } = require("framer-motion");

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  /* margin: 1rem 2rem; */
  align-content: space;
  border-bottom: 1px solid #ddd3d3;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  h2 {
    font-weight: bold;
    margin: 0 1rem;
    color: #434343a6;
  }
  h3 {
    color: #434343a6;
    font-style: italic;
    font-family: monospace;
    margin-top: 0.2rem;
    text-overflow: "...";
    /* overflow: hidden; */
  }
`;
export const Quantitity = styled(motion.div)`
  height: 1rem !important;
  position: absolute;
  width: 1rem;
  background: #fb1c3b;
  font-size: 10px;
  padding: 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 55%;
  top: 15%;
  /* border: 1px solid black; */
  border-radius: 50%;
`;

export const CartStyle = styled.div`
  font-size: medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #434343a6;
  margin-top: 0.4rem;
  svg {
    font-size: 2rem;
  }
`;

// export const Animation = styled.div`
//   position: absolute;
//   animation: ripple 5s infinite;
//   border-radius: 100%;
//   border: none;
//   background-color: #eff2f5;
//   box-shadow: inset 10px 10px 20px #f3f3f3, inset -5px -5px 5px #ffffff;
//   transition: 0.33s ease-in all;
//   opacity: 0;
//   @keyframes ripple {
//     0% {
//       width: 20px;
//       height: 20px;
//       opacity: 1;
//     }
//     100% {
//       width: 800px;
//       height: 400px;
//       opacity: 0;
//     }
//   }
// `;
