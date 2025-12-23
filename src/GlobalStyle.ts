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

        .flex-button {
          display: flex;
          gap: 20px;
        }

      form {
        .flex-input-wrapper {
          display: flex;
          gap: 20px;

          @media (max-width: ${breakpoint.tablet}) {
            display: block;
          }
        }

          .input-wrapper {
            display: flex;
            flex-direction: column;
            padding: 8px 0;
            width: 100%;

            label {
              font-weight: bold;
              padding-bottom: 8px;
            }

            input {
              background-color: ${cores.corFooter};
              outline: none;
              border: none;
              padding: 8px;
              border: 1px solid ${cores.corFooter};
              color: ${cores.corTexto};
              font-size: 16px;
              font-weight: bold;

              &:focus {
                border: 1px solid ${cores.corLeveTexto};
              }
            }
          }
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
