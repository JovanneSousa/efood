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

    .container {
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoint.tablet}) {
      max-width: 80%;
    }
    }
`
