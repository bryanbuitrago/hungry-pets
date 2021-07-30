import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <LoginSignup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
