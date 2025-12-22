import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#e66767',
  corLeveTexto: '#f19999',
  corFooter: '#FFEBD9',
  corDeFundo: '#fff8f2',
  corDeFundoEscura: '#fff1e6',
  corLeveDeFundo: '#fffdfb',
  branco: '#ffffff',
  preto: '#000'
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

        .layout-profile {
          background-color: ${cores.corDeFundoEscura};
        }

        body, #root, html {
          width: 100%;
          min-height: 100vh;
        }

        .page-content {
          padding: 80px 0;

          @media (max-width: ${breakpoint.tablet}) {
            padding: 40px 0;
          }
        }

        .shadow {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }

    .container {
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoint.tablet}) {
      max-width: 90%;
    }
    }
`
