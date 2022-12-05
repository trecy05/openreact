import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../pages/Accueil";
import APropos from "../pages/APropos";
import Page404 from "../pages/page404";

function RoutesPath(params) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
