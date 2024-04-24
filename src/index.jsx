import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Container from "react-bootstrap/Container";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

const MyFlixApplication = () => {
  return (
    <Container style={{border: "1px solid red"}}>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);
