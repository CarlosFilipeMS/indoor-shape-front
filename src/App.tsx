import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FichaForm from './pages/FichaForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficha" element={<FichaForm />} />
      </Routes>
    </Router>
  );
}

export default App
