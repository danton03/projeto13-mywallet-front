import { ContainerPage, Header } from "./layouts/HomePageStyles";
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
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    const promise = axios.post("https://projeto13-mywallet-danton.herokuapp.com/addMoney", formData, config);
    promise.then((response) => {
      setIsDisabled(false);
      navigate("/home");
    });
    promise.catch((error) => {
      const status = error.response.status;
      if (status === 401) {
        navigate("/");
      }
      setIsDisabled(false);
    })

    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Entada adicionada com sucesso!',
        error: {
          render({ data }) {
            const code = data.response.status;
            //Verificar se esses são os códigos corretos
            if (code === 401 || code === 422) {
              const message = data.response.data;
              return message;
            }
            else {
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
        <p>Nova entrada</p>
      </Header>

      <ContainerAuth>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Valor"
            step="0.01"
            min="0.01"
            value={formData.amount}
            onChange={(e) => { setFormData({ ...formData, amount: e.target.value }) }}
            disabled={isDisabled}
            required
          />

          <input
            type="text"
            maxLength={20}
            placeholder="Descrição"
            value={formData.description}
            onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }}
            disabled={isDisabled}
            required
          />

          <ButtonSubmit
            type="submit"
            disabled={isDisabled}
          >
            Salvar Entrada
          </ButtonSubmit>
        </form>
      </ContainerAuth>
    </ContainerPage>
  );
}