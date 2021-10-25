import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    transition: all 0.25s linear;
    min-width:100vw;
    min-height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;

    &::-webkit-scrollbar {
  width: 2px;               /* width of the entire scrollbar */
}
  /* Track */
  &::-webkit-scrollbar-track {
    background: #21222c;
    /* border: 0.33px solid rgba(255, 255, 255, 0.1); */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

.centralize{
    display:flex;
    justify-content: center;
    align-items:center;
}

.fullsize{
    width:100%;
    height:100%;
}
`;
