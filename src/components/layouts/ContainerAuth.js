import styled from "styled-components";

const ContainerAuth = styled.div`
  margin-top: 24px;

  &, form{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  form{
    gap: 14px;
    margin-bottom: 36px;
    max-width: 326px;
    input{
      width: 100%;
      height: 58px;
      padding: 0 15px;
      background-color: var(--cor-branca);
      border-radius: 5px;
      border-style: none;
      box-sizing: border-box;

      font-weight: 400;
      font-size: 1.25em;
      line-height: 1.44em;
      color: var(--cor-preta);
    }

    input:focus{
      outline-color: var(--cor-botão);
    }

    input:disabled{
      cursor: not-allowed;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
  }
`;

export {ContainerAuth};