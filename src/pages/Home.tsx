// src/pages/Home.jsx
import React from "react";
import logo1 from '../assets/logo1.png';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center px-6 text-center  rounded-2xl">
      {/* Logo Placeholder */}
        <div className="mb-1">
          <img src={logo1} alt="Logo Indoor Shape" className="w-48 h-48 mx-auto" />

        </div>

        <h1 className="text-2xl sm:text-5xl font-semibold text-[#0d273f] mb-2">
            Indoor Shape    
        </h1>

        <h2 className="text-2xl sm:text-2xl text-[#3c3c44] mb-8">
            Seu treino começa onde a chuva para.
        </h2>

      {/* Texto de apresentação */}
      <h1 className="text-2xl sm:text-2xl font-semibold text-[#0d273f] mb-4">
        Transforme seu treino com Indoor Shape
      </h1>
    

      <p className="text-[#3c3c44] max-w-md mb-8">
        Preencha a sua ficha, realize o pagamento e dentro de 24h o seu treino entregue.
      </p>

      {/* Botão principal */}
        <Link
        to="/ficha"
        className="bg-[#bde253] text-[#0d273f] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#aacd45] transition">
        Comece já
      </Link>
    </div>
  );
}
