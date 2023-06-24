import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";


function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.length < 3) {
      setError("Логин должен содержать минимум 3 символа");
      return;
    }
    if (password.length < 6 || !/[!@#$%^&*()]/.test(password)) {
      setError(
        "Пароль должен содержать минимум 6 символов и один из спецсимволов: !@#$%^&*()"
      );
      return;
    }
    const mockUsername = "admin";
    const mockPassword = "qwerty!";
    if (login === mockUsername && password === mockPassword) {
      setError("");
      navigate(`/user?user=${login}`);
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="loginform">
      <h1>Страница входа</h1>
      <form onSubmit={handleSubmit} className="form__body">
        <label>Login:</label>
        <input type="text" value={login} onChange={handleEmailChange} />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Войти</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
