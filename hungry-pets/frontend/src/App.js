import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";
import PetList from "./components/PetList";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <LoginSignup />
        <hr />
        <PetList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
