import "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import RoutesPath from "./RoutesPath";
import "./App.module.css";
import Banniere from "./Banniere";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Banniere />
        <RoutesPath />
      </BrowserRouter>
    </>
  );
}

export default App;
