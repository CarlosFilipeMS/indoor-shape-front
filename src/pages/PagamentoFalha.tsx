import logo1 from '../assets/logo1.png';
import { useNavigate } from "react-router-dom";


function PagamentoFalha() {

  const navigate = useNavigate();
  
  return (
  <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center p-4 relative rounded-2xl">
  
    <div className="min-h-screen bg-[#fbfbf4] flex flex-col items-center justify-center px-6 text-center  rounded-2xl">
      <button
        onClick={() => navigate("/ficha")}
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
            Ops! Algo deu errado com o seu pagamento.
        </p>


        <p className="text-1xl sm:text-2xl text-[#3c3c44] mb-4">
          Pagamento não concluído, tente novamente.
        </p>
        <p className="text-1xl sm:text-1xl text-[#3c3c44] mb-4">
          Contato para dúvidas: indoorshape@gmail.com
        </p>
      </div>

    </div>
  </div>
  )
}

export default PagamentoFalha