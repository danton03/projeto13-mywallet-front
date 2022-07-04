import { ButtonSubmit } from "./layouts/ButtonSubmit";
import { ContainerPage } from "./layouts/ContainerPage";
import { ContainerAuth } from "./layouts/ContainerAuth";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    const promise = axios.post("https://projeto13-mywallet-danton.herokuapp.com/login", formData);
    promise.then((response) =>{
      setUser(response.data);
      setIsDisabled(false);
      navigate("/home");
    });
    promise.catch(() => {
      setIsDisabled(false);
    })

    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Login realizado com sucesso!',
        error: {
          render({data}){
            const code = data.response.status;
            if(code === 401 || code === 422){
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
            type="email" 
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => {setFormData({...formData, email: e.target.value})}}
            disabled = {isDisabled}
            required
          />

          <input 
            type="password" 
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => {setFormData({...formData, password: e.target.value})}}
            disabled = {isDisabled}
            required
          />

          <ButtonSubmit 
            type="submit" 
            disabled = {isDisabled}
          >
            Entrar
          </ButtonSubmit>
        </form>

        <button 
          type="button" 
          className="changePage" 
          onClick={() => navigate("/cadastro")}
          disabled = {isDisabled}
        >
          Primeira vez? Cadastre-se!
        </button>
      </ContainerAuth>
    </ContainerPage>
  );
}
