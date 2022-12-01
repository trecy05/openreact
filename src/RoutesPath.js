import { Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import APropos from "./APropos";

function RoutesPath(params) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="À propos" element={<APropos />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
