import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import logo1 from '../assets/logo1.png';
import axios from "axios";

function PagamentoSucesso() {
  const [searchParams] = useSearchParams();
  const fichaId = searchParams.get("fichaId");
  const navigate = useNavigate();

  type FichaResponseDTO = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    status: "PENDENTE" | "PAGO";
  };

  const [ficha, setFicha] = useState<FichaResponseDTO | null>(null);

  useEffect(() => {
    if (fichaId) {
      axios
        .patch(`https://bd7c-177-37-171-220.ngrok-free.app/fichas/${fichaId}/pago`)
        .then(() => {
          console.log("Status atualizado, buscando dados...");
          return axios.get(`https://bd7c-177-37-171-220.ngrok-free.app/fichas/${fichaId}`);
        })
        .then((res) => {
          setFicha(res.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar ou buscar ficha:", err);
        });
    }
  }, [fichaId]);

  return (
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center px-6 py-12 text-center relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-[#0d273f] font-medium hover:underline"
      >
        ← Voltar
      </button>

      <img src={logo1} alt="Logo Indoor Shape" className="w-48 h-48 mb-4" />

      <h1 className="text-3xl font-semibold text-[#0d273f] mb-4">Indoor Shape</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <p className="text-2xl font-semibold text-[#0d273f] mb-4">Pagamento aprovado!</p>

        <p className="text-[#3c3c44] text-lg mb-6">
          Obrigado! Sua ficha foi salva com sucesso. Seu treino será enviado para o e-mail cadastrado em até 24 horas.
        </p>

        {ficha && (
          <div className="text-left text-[#0d273f] space-y-2">
            <p><strong>Nome:</strong> {ficha.nome}</p>
            <p><strong>Email:</strong> {ficha.email}</p>
            <p><strong>Status:</strong> <span className={ficha.status === 'PAGO' ? "text-green-600 font-bold" : "text-yellow-600 font-bold"}>{ficha.status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PagamentoSucesso;
