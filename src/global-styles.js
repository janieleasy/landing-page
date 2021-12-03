import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg-primary: #fff;
    --color-bg-secondary: #f8f8fa;
    --color-bg-teriary: #e6e6eb;
    --color-bg-quaternary: #000;

    --color-text-primary: #000;
    --color-text-secondary: #828282;
    --color-text-teriary: #788a9f;
    --color-text-quaternary: #fff;

    --color-line-primary: rgba(0, 0, 0, 0.2);
    --color-line-secondary: rgba(0, 0, 0, 0.1);

    --color-active-green: #0bb968;
    --color-active-blue: #3b50df;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    font-size: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);

    overflow-x: hidden;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: 'Poppins';
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    -webkit-tap-highlight-color: transparent;


    min-height: 100vh;
  }
`;