import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FichaForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    altura: "",
    peso: "",
    objetivo: "",
    nivel: "",
    limitacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // 1. Cria a ficha com status "PENDENTE"
    const fichaResponse = await axios.post("https://9cb1-177-37-171-220.ngrok-free.app/fichas", {
      ...formData,
      altura: formData.altura.replace(",", "."),
      peso: formData.peso.replace(",", "."),
    });

    const fichaId = fichaResponse.data.id;

    // 2. Cria preferência de pagamento com o ID da ficha
    const response = await axios.post(`https://9cb1-177-37-171-220.ngrok-free.app/pagamento/criar-preferencia/${fichaId}`);


    const redirectUrl = response.data.initPoint;

    // 3. Redireciona para o checkout do Mercado Pago
    window.location.href = redirectUrl;

  } catch (error: any) {
    console.error("Erro:", error.response?.data || error.message);
    alert("Erro: " + (error.response?.data?.message || error.message));
  }
};


  return (
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center p-4 relative rounded-2xl">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-[#0d273f] font-medium hover:underline"
      >
        ← Voltar
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 space-y-4 mt-12"
      >
        <h2 className="text-2xl font-bold text-[#0d273f] text-center">Ficha de Avaliação</h2>

        <input
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          type="text"
          placeholder="Nome completo"
          className="w-full p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        />
        <input
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          type="tel"
          placeholder="Telefone"
          className="w-full p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        />
        <div className="flex gap-4">
          <input
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            type="text"
            placeholder="Altura (cm)"
            className="w-1/2 p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
          />
          <input
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            type="text"
            placeholder="Peso (kg)"
            className="w-1/2 p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
          />
        </div>

        <select
          name="objetivo"
          value={formData.objetivo}
          onChange={handleChange}
          className="w-full p-3 border border-[#9aa1a7] rounded-lg text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        >
          <option value="">Objetivo</option>
          <option value="emagrecimento">Emagrecimento</option>
          <option value="condicionamento">Condicionamento físico</option>
          <option value="hipertrofia">Hipertrofia (ganho de massa)</option>
          <option value="manter">Manter a saúde e disposição</option>
        </select>

        <select
          name="nivel"
          value={formData.nivel}
          onChange={handleChange}
          className="w-full p-3 border border-[#9aa1a7] rounded-lg text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        >
          <option value="">Nível</option>
          <option value="iniciante">Iniciante (nunca treinei ou parei há muito tempo)</option>
          <option value="intermediario">Intermediário (já treinei ou faço de vez em quando)</option>
          <option value="avancado">Avançado (tenho experiência regular com treinos)</option>
        </select>

        <textarea
          name="limitacao"
          value={formData.limitacao}
          onChange={handleChange}
          placeholder="Possui alguma limitação?"
          rows={3}
          className="w-full p-3 border border-[#9aa1a7] rounded-lg placeholder:text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#bde253]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#bde253] text-[#0d273f] font-semibold py-3 rounded-lg hover:brightness-110 transition"
        >
          Finalizar
        </button>
      </form>
    </div>
  );
}