import { ContainerPage, Header} from "./layouts/HomePageStyles";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ContainerAuth } from "./layouts/ContainerAuth";
import { ButtonSubmit } from "./layouts/ButtonSubmit";

export default function AddIncomingPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    amount: '',
    description: ''
  });
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    const promise = axios.post("http://localhost:5000/addMoney", formData);
    promise.then((response) =>{
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
            //Verificar se esses são os códigos corretos
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
      <Header>
        <p>Nova Entrada</p>
      </Header>

      <ContainerAuth>
        <form onSubmit={handleSubmit}>
          <input 
            type="number" 
            min={0}
            placeholder="Valor"
            onChange={(e) => {setFormData({...formData, amount: e.target.value})}}
            disabled = {isDisabled}
            required
          />

          <input 
            type="text"
            maxLength={20} 
            placeholder="Descrição"
            onChange={(e) => {setFormData({...formData, description: e.target.value})}}
            disabled = {isDisabled}
            required
          />

          <ButtonSubmit 
            type="submit" 
            disabled = {isDisabled}
          >
            Salvar Entrada
          </ButtonSubmit>
        </form>
      </ContainerAuth>
    </ContainerPage>
  );
}