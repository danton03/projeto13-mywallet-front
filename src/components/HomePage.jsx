import { Actions, ContainerPage, Header, TransactionsPanel, Valor } from "./layouts/HomePageStyles";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LogoutImg from "../assets/images/exit.svg";
import axios from "axios";
import { toast } from "react-toastify";

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const promise = axios.get("https://projeto13-mywallet-danton.herokuapp.com/wallet", config)

    promise.then(response => {
      setTransactions(response.data);
      calculateBalance(response.data);
    })

    promise.catch(err => (err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateBalance(transactions) {
    let positiveBalance = 0;
    let negativeBalance = 0;

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === 'incoming') {
        positiveBalance += parseFloat(transactions[i].amount);
      } else {
        negativeBalance -= parseFloat(transactions[i].amount);
      }
    }
    setTotal(positiveBalance + negativeBalance);
  }

  function renderTransactions() {
    const corVerde = "#03AC00";
    const corVermelha = "#C70000";
    
    return (
      <>
      {transactions.map(transaction =>
        <div key={transaction._id} className="transaction" >
          <div className="information" >
            <span className="date" >{transaction.date}</span>
            <span className="description" >{transaction.description}</span>
          </div>
          <div className="value" >
            <Valor color={transaction.type === "incoming" ? corVerde : corVermelha}>{parseFloat(transaction.amount).toFixed(2).replace(".", ",")}
            </Valor>
          </div>
        </div>
      )}
  
      <div className="saldo" >
        <h4>SALDO</h4>
        <Valor color={total >= 0 ? corVerde : corVermelha}>{total.toFixed(2).toString().replace("-", "").replace(".", ",")}</Valor>
      </div>
    </>
    );
  }

  function handleLogout() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
    const promise = axios.post("https://projeto13-mywallet-danton.herokuapp.com/logout", {}, config);
    promise.then((response) =>{
      navigate("/");
    });

    toast.promise(
      promise,
      {
        pending: 'Carregando...',
        success: 'Logout realizado com sucesso!',
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
      {user.name ?
        (
          <Header>
            <p>Ola, {user.name}</p>
            <img src={LogoutImg} alt="Ícone de Sair" onClick={handleLogout} />
          </Header>
        )
        : ''}
      <TransactionsPanel>
        {transactions.length > 0 ? 
          renderTransactions() : 
          (
            <div className="message">
              <p>Não há registros de entrada ou saída</p>
            </div>
          )
        }
      </TransactionsPanel>
      <Actions>
        <button
          type="button"
          onClick={() => navigate("/entrada")}
        >
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </button>

        <button
          type="button"
          onClick={() => navigate("/saida")}
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </button>
      </Actions>
    </ContainerPage>
  );
}

