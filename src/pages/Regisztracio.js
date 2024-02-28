import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Regisztracio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      _token: token
    };
    try {
      await axios.post("/register", adat);
    } catch (error) {
      console.log(error);
    }
  };

  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      console.log(response);
      token = response.data;
    });

  return (
    <div className="m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Regisztráció</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Név:
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            placeholder="név"
            name="name"
          />

          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Jelszó:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pwd2" className="form-label">
            Jelszó újra:
          </label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            className="form-control"
            id="pwd2"
            placeholder="jelszó"
            name="pwd2"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Regisztrálok
        </button>
      </form>
    </div>
  );
}
