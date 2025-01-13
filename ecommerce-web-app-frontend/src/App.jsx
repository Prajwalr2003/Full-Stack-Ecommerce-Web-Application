import Footer from "./components/customerComponents/FooterBar";
import Header from "./components/customerComponents/Header";
import Container from "./components/customerComponents/Container";
import { Outlet } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/Auth";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <Header />
          <Container>
            <Outlet></Outlet>
          </Container>
          <Footer />
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default App;
