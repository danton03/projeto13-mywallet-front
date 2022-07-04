import styled from "styled-components";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 22px;

  p{
    font-weight: 700;
    font-size: 1.63em;
    line-height: 1.94em;
    width: 85%;
  }

  img{
    display: flex;
    align-items: center;
    height: auto;
    width: 30px;
  }
  img:hover{
    cursor: pointer;
  }
`;

const TransactionsPanel = styled.div`
  position: relative;
  width: 100%;
  height:63vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 10px;
  background-color: var(--cor-branca);
  border-radius: 5px;
  box-sizing: border-box;
  overflow-y: scroll;

  .message{
    width: 100%;
    height:63vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      width: 80%;
      height: auto;
  
      color: var(--cor-cinza);
    }
  }

  .transaction {
    display: flex;
    width: 100%;
    margin-top: 22px;
    justify-content: space-between;
    align-items: center;
  }

  .date{
    color: var(--cor-data);
  }

  .description{
    color: var(--cor-preta);
  }

  .information,.value{
    display: flex;
    gap: 10px;
  }

  .saldo {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 25px;
    font-size: 18px;
    padding: 20px;
    box-sizing: border-box;

    h4{
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: var(--cor-preta);
    }
  }
`;

const Valor = styled.span`
  color: ${props => props.color};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  
  button{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 156px;
    height: 115px;
    padding-left: 12px;
    background-color: var(--cor-botão);
    box-sizing: border-box;
    border-radius: 5px;
    border: none;

    p{
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      text-align: left;
      width: 60%;
      color: var(--cor-branca);
    }

    ion-icon{
      color: var(--cor-branca);
      font-size: large;
    }
  }
`;

export {Actions, ContainerPage, Header, TransactionsPanel, Valor};