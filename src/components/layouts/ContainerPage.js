import styled from "styled-components";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25px 24px 16px;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  color: var(--cor-branca);

  h1{
    font-family: 'Saira Stencil One', sans-serif;
    font-weight: 400;
    font-size: 2em;
    line-height: 50px;
    color: var(--cor-branca);
  }

  .changePage{
    width: auto;
    height: auto;
    font-weight: 700;
    font-size: 0.94em;
    line-height: 1.13em;
    border: none;
    background: none;
    color: var(--cor-branca);
  }
  .changePage:hover{
    cursor: pointer;
  }
`;

export {ContainerPage};