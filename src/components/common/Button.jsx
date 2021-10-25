import React from "react";
import styled from "styled-components";

const Button = ({ type, text, click, width, height, mT, mR, active }) => {
  return (
    <Container height={height} mT={mT} mR={mR} type={type} onClick={click} width={width} active={active}>
      {text}
    </Container>
  );
};
const Container = styled.button`
    width: ${({ width }) => (width ? width : "100%")};
    /* height: 52px; */
    height: ${({ height }) => (height ? height : "52px")};
    padding: 1rem;
    margin-top: ${({ mT }) => (mT ? mT : "0")};
    margin-right: ${({ mR }) => (mR ? mR : "0")};
    cursor: pointer;
    background: ${({ theme, active }) => (active ? theme.secondary : "none")};
    color: ${({ active }) => (active ? "#fff" : "#41a300")};
    /* color: #fff; */
    border: none;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Button;
