import "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./RoutesPath";
import "./App.module.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesPath />
      </BrowserRouter>
    </>
  );
}

export default App;
