import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Estilos Personalizados */
  /* Cores em variáveis: */
  *{
    font-family: 'Raleway', sans-serif;
    --cor-roxa: #8C11BE;
    --cor-botão: #A328D6;
    --cor-cinza: #868686;
    --cor-data: #C6C6C6;
    --cor-branca: #FFFFFF; 
    --cor-preta: #000000;
    --cor-verde: #03AC00;
    --cor-vermelha: #C70000;
  }
  
  body{
    display: flex;
    justify-content: center;
    min-height: 100vh;
    height: 100%;
    font-size: 16px;
    background-color: var(--cor-roxa);
  }
  
  #root{
    width: 100%;
  }
`;
 
export default GlobalStyle;