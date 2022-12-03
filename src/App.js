import "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import RoutesPath from "./RoutesPath";
import "./App.module.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesPath />
      </BrowserRouter>
    </>
  );
}

export default App;
