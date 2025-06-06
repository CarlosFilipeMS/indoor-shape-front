import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import logo1 from '../assets/logo1.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PagamentoSucesso() {
  const [searchParams] = useSearchParams();
  const fichaId = searchParams.get("fichaId");
  const navigate = useNavigate();
  const [ficha, setFicha] = useState(null);


useEffect(() => {
  if (fichaId) {
    axios
      .patch(`https://1d21-177-37-171-220.ngrok-free.app/fichas/${fichaId}/pago`)
      .then(() => {
        console.log("Status atualizado, buscando dados...");
        return axios.get(`https://1d21-177-37-171-220.ngrok-free.app/fichas/${fichaId}`);
      })
      .then((res) => {
        setFicha(res.data); // Atualiza o estado com os dados da ficha
      })
      .catch((err) => {
        console.error("Erro ao atualizar ou buscar ficha:", err);
      });
  }
}, [fichaId]);




  return (
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center p-4 relative rounded-2xl">
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center px-6 text-center  rounded-2xl">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-[#0d273f] font-medium hover:underline"
      >
        ← Voltar
      </button>
      {/* Logo Placeholder */}
      <div className="mb-1">
        <img src={logo1} alt="Logo Indoor Shape" className="w-48 h-48 mx-auto" />

      </div>
      
      <h1 className="text-2xl sm:text-2xl font-semibold text-[#0d273f] mb-4">
        Indoor Shape  
      </h1>
      <div className="h-[50vh] bg-[#fbfbf4] flex flex-col items-center justify-center px-6 text-center  rounded-2xl">
        <p className="text-2xl sm:text-3xl font-semibold text-[#0d273f] mb-6">
            Pagamento aprovado!
        </p>


        <p className="text-1xl sm:text-2xl text-[#3c3c44] mb-4">
          Obrigado! Sua ficha foi salva com sucesso. Seu treino será enviado para o e-mail cadastrado em até 24 horas.
        </p>
        {ficha && (
            <div className="mt-6 bg-white p-4 rounded-xl shadow-md text-[#0d273f] w-full max-w-md">
              <h2 className="text-xl font-semibold mb-2">Resumo da ficha</h2>
              <p><strong>Nome:</strong> {ficha.nome}</p>
              <p><strong>Email:</strong> {ficha.email}</p>
              <p><strong>Telefone:</strong> {ficha.telefone}</p>
              <p><strong>Status:</strong> {ficha.status}</p>
            </div>
            )}

      </div>

    </div>
    </div>
  );
}

export default PagamentoSucesso;
