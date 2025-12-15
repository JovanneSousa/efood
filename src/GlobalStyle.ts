<<<<<<< HEAD
import { createGlobalStyle } from "styled-components";

export const cores = {
  corTexto: "#e66767",
  corFooter: "#FFEBD9",
  corDeFundo: "#fff8f2",
  branco: "#ffffff",
};

export const breakpoint = {
  desktop: "1024px",
  tablet: "768px",
};
=======
import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#e66767',
  corFooter: '#FFEBD9',
  corDeFundo: '#fff8f2',
  branco: '#ffffff'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: roboto, sans-serif;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        }
        
        body {
          color: ${cores.corTexto};
          background-color: ${cores.corDeFundo};
        }

<<<<<<< HEAD
        body, #root {
          width: 100%;
        }

=======
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11
    .container {
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoint.tablet}) {
      max-width: 80%;
    }
    }
<<<<<<< HEAD
`;
=======
`
>>>>>>> 828af506f8053585642a2321bd619077db8a1f11
