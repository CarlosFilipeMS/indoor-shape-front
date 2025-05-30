import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FichaForm from './pages/FichaForm';
import PagamentoSucesso from './pages/PagamentoSucesso';
import PagamentoFalha from './pages/PagamentoFalha';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ficha" element={<FichaForm />} />
      <Route path="/pagamento/sucesso" element={<PagamentoSucesso />} />
      <Route path="/pagamento/falha" element={<PagamentoFalha />} />
      </Routes>
    </Router>
  );
}

export default App
