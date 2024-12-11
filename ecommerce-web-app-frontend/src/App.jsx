import Footer from "./components/FooterBar";
import Header from "./components/Header";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer />
    </>
  );
}

export default App;
