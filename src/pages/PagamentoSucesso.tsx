import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import logo1 from '../assets/logo1.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PagamentoSucesso() {
  const [searchParams] = useSearchParams();
  const fichaId = searchParams.get("fichaId");
  const navigate = useNavigate();

  useEffect(() => {
    if (fichaId) {
      axios
        .patch(`https://a9f7-177-37-171-220.ngrok-free.app/fichas/${fichaId}/pago`)
        .then(() => {
          console.log("Status da ficha atualizado para PAGO");
        })
        .catch((err) => {
          console.error("Erro ao atualizar ficha:", err);
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
      </div>

    </div>
    </div>
  );
}

export default PagamentoSucesso;
