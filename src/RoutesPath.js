import { Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import APropos from "./APropos";
import Page404 from "./page404";

function RoutesPath(params) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="À propos" element={<APropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
