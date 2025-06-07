import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import logo1 from '../assets/logo1.png';

type FichaResponseDTO = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

function PagamentoSucesso() {
  const [searchParams] = useSearchParams();
  const fichaId = searchParams.get("fichaId");
  const navigate = useNavigate();

  const [ficha, setFicha] = useState<FichaResponseDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fichaId) {
      setError("ID da ficha não informado.");
      setLoading(false);
      return;
    }

    const fetchFicha = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<FichaResponseDTO>(`https://0141-177-37-171-220.ngrok-free.app/fichas/${fichaId}`);
        setFicha(response.data);
      } catch (err: any) {
        console.error(err);
        setError("Erro ao carregar dados da ficha. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchFicha();
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

        {loading && <p>Carregando os dados da ficha...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && ficha && (
          <div className="text-left text-[#0d273f] space-y-2">
            <p><strong>Nome:</strong> {ficha.nome}</p>
            <p><strong>Email:</strong> {ficha.email}</p>
            <p><strong>Telefone:</strong> {ficha.telefone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PagamentoSucesso;
