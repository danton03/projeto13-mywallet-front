import { ButtonSubmit } from "./layouts/ButtonSubmit";
import { ContainerPage } from "./layouts/ContainerPage";
import { ContainerAuth } from "./layouts/ContainerAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ContainerPage>
      <h1>MyWallet</h1>
      <ContainerAuth>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome (2 a 25 caracteres)"
            onChange={(e) => {setFormData({...formData, name: e.target.value})}}
            required
          />
          <input 
            type="email" 
            placeholder="E-mail"
            onChange={(e) => {setFormData({...formData, email: e.target.value})}}
            required
          />
          <input 
            type="password" 
            placeholder="Senha (4 a 30 caracteres)"
            onChange={(e) => {setFormData({...formData, password: e.target.value})}} 
            required
          />
          <input 
            type="password" 
            placeholder="Confirme a senha"
            onChange={(e) => {setFormData({...formData, password_confirmation: e.target.value})}}
            required
          />
          <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </form>

        <button 
          type="button" 
          className="changePage" 
          onClick={() => navigate("/")}
        >
          Já tem uma conta? Entre agora!
        </button>
      </ContainerAuth>
    </ContainerPage>
  );
}