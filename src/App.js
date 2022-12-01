import "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import RoutesPath from "./RoutesPath";

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
