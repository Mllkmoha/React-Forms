import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./components/StateLogin.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
