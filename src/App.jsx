import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Count from "./components/Count.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectItem from "./components/SelectItem.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Count />
                  <SelectItem />
                </>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
