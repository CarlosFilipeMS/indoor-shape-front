import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function PagamentoSucesso() {
  const [searchParams] = useSearchParams();
  const fichaId = searchParams.get("fichaId");

  useEffect(() => {
    if (fichaId) {
      axios
        .patch(`https://9cb1-177-37-171-220.ngrok-free.app/${fichaId}/pago`)
        .then(() => {
          console.log("Status da ficha atualizado para PAGO");
        })
        .catch((err) => {
          console.error("Erro ao atualizar ficha:", err);
        });
    }
  }, [fichaId]);

  return (
    <div>
      <h2>Pagamento aprovado!</h2>
      <p>Obrigado! Sua ficha foi salva e seu treino será enviado em até 24h.</p>
    </div>
  );
}

export default PagamentoSucesso;
