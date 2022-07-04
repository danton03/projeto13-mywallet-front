import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import UserContext from "./contexts/UserContext"
import HomePage from "./components/HomePage";
import AddIncomingPage from "./components/AddIncomingPage";
import AddExpensePage from "./components/AddExpensePage";

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<SignInPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/entrada" element={<AddIncomingPage/>} />
          <Route path="/saida" element={<AddExpensePage/>} />
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
