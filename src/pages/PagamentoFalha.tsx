import logo1 from '../assets/logo1.png';

function PagamentoFalha() {
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
        Pagamento não concluído
      </h2>
      <p className="text-[#3c3c44] max-w-md mb-8">
        Ocorreu um erro ou o pagamento foi cancelado.
      </p>

    </div>

  )
}

export default PagamentoFalha