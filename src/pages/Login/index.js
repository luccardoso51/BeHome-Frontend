import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

import LogoImg from "../../assets/Logo.png";
import BeHomeImg from "../../assets/BeHome.png";

export default function Login() {
  const [id, setId] = useState("");
  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      id,
    };

    try {
      const response = await api.post("sessions", data);

      alert(`Seu ID de acesso: ${response.data.id}`);
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="BeHome" />

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Entre com seu código ID"
          />

          <section className="login-btn">
            <Link to="/feed">
              <button type="submit">Entrar</button>
            </Link>
          </section>
        </form>
        <section className="register">
          <Link to="/Register">Não tenho cadastro</Link>
        </section>
      </section>
      <img src={BeHomeImg} alt="BeHome" />
    </div>
  );
}
