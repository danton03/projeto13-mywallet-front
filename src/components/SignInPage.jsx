import { ButtonSubmit } from "./layouts/ButtonSubmit";
import { ContainerPage } from "./layouts/ContainerPage";
import { ContainerAuth } from "./layouts/ContainerAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    const promise = axios.post("http://localhost:5000/signup", formData);
    promise.then((response) =>{
      setIsDisabled(false);
      navigate("/");
    });
    promise.catch(() => {
      setIsDisabled(false);
    })

    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Cadastro realizado com sucesso!',
        error: {
          render({data}){
            const code = data.response.status;
            if(code === 409 || code === 422){
              const message = data.response.data;
              return message; 
            }
            else{
              return "Ops, tivemos uma falha interna";
            }
          }
        }
      }
    );
  }

  return (
    <ContainerPage>
      <h1>MyWallet</h1>
      <ContainerAuth>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome (2 a 25 caracteres)"
            value={formData.name}
            onChange={(e) => {setFormData({...formData, name: e.target.value})}}
            disabled = {isDisabled}
            required
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => {setFormData({...formData, email: e.target.value})}}
            disabled = {isDisabled}
            required
          />
          <input 
            type="password" 
            placeholder="Senha (4 a 30 caracteres)"
            value={formData.password}
            onChange={(e) => {setFormData({...formData, password: e.target.value})}} 
            disabled = {isDisabled}
            required
          />
          <input 
            type="password" 
            placeholder="Confirme a senha"
            value={formData.password_confirmation}
            onChange={(e) => {setFormData({...formData, password_confirmation: e.target.value})}}
            disabled = {isDisabled}
            required
          />
          <ButtonSubmit 
            type="submit"
            disabled = {isDisabled}
          >
            Cadastrar
          </ButtonSubmit>
        </form>

        <button 
          type="button" 
          className="changePage" 
          onClick={() => navigate("/")}
          disabled = {isDisabled}
        >
          Já tem uma conta? Entre agora!
        </button>
      </ContainerAuth>
    </ContainerPage>
  );
}