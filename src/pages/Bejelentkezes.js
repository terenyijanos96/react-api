import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Bejelentkezes() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = { email: email, password: password, _token: token };
    try {
      await axios.post("/login", adat);
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
      <h1 className="text-center">Bejelentkezés</h1>
      <form onSubmit={handleSubmit}>
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
        </div>
        <div>
          <span className="text-danger">hiba</span>
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

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p>
            Még nincs felhaszálóneve?
            <Link className="nav-link text-info" to="/regisztracio">
              Regisztráció
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
