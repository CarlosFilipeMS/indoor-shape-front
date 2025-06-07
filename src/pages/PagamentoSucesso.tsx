import { useNavigate } from "react-router-dom";
import logo1 from '../assets/logo1.png';

function PagamentoSucesso() {
  const navigate = useNavigate();

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

        <p className="text-[#3c3c44] text-lg">
          Obrigado! Sua ficha foi salva com sucesso. Seu treino será enviado para o e-mail cadastrado em até 24 horas.
        </p>
      </div>
    </div>
  );
}

export default PagamentoSucesso;
