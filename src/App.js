import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Bejelentkezes from "./pages/Bejelentkezes";
import Regisztracio from "./pages/Regisztracio";
import VendegLayout from "./layouts/VendegLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendegLayout />}>
          <Route index element={<Kezdolap />} />
          <Route path="bejelentkezes" element={<Bejelentkezes />} />
          <Route path="regisztracio" element={<Regisztracio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
