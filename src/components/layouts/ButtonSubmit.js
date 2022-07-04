import styled from "styled-components";

const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: var(--cor-botão);
  border-radius: 5px;
  border: none;

  font-weight: 700;
  font-size: 1.25em;
  line-height: 1.44em;
  color: var(--cor-branca);

  &:hover{
    cursor: pointer;
  }

  &:disabled{
    cursor: not-allowed;
    filter: brightness(75%);
  }
`;

export {ButtonSubmit};