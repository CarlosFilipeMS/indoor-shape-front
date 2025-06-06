import logo1 from '../assets/logo1.png';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-start px-6 pt-6 pb-28 text-center relative">
      {/* Logo */}
      <div>
        <img src={logo1} alt="Logo Indoor Shape" className="w-40 h-40 mx-auto" />
      </div>

      <h1 className="text-2xl sm:text-4xl font-semibold text-[#0d273f]">
        Indoor Shape
      </h1>

      <h2 className="text-2xl sm:text-2xl text-[#3c3c44] mb-4">
        Seu treino começa onde a chuva para.
      </h2>

      <h1 className="text-2xl sm:text-2xl font-semibold text-[#0d273f] mb-4">
        Transforme seu treino com Indoor Shape
      </h1>

      {/* Card de vantagens */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl mb-4 border border-[#bde253]">
        <h3 className="text-[#0d273f] text-xl font-semibold mb-4 text-left">
          Por que treinar com o Indoor Shape?
        </h3>
        <ul className="text-[#3c3c44] space-y-3 list-disc list-inside text-left">
          <li><span className="font-medium text-[#0d273f]">Sem academia:</span> treine em casa com liberdade e conforto.</li>
          <li><span className="font-medium text-[#0d273f]">Zero equipamentos:</span> apenas seu corpo e disposição.</li>
          <li><span className="font-medium text-[#0d273f]">Acesso rápido:</span> receba seu treino em até 24h por e-mail.</li>
          <li><span className="font-medium text-[#0d273f]">Para todos os níveis:</span> iniciante ao avançado.</li>
          <li><span className="font-medium text-[#0d273f]">Adaptação fácil:</span> ideal para espaços pequenos.</li>
        </ul>
      </div>

      {/* Botão fixo no rodapé */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center px-4">
        <Link
          to="/ficha"
          className="bg-[#bde253] text-[#0d273f] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#aacd45] transition w-full max-w-xs text-center"
        >
          Quero treinar agora
        </Link>
      </div>
    </div>
  );
}
