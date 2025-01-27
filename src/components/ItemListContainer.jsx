/* eslint-disable react/prop-types */
import TituloComponente from "./TituloComponente";

export default function ItemListContainer({ mensaje }) {
  return (
    <section className="miTitulo">
      <TituloComponente texto={mensaje} />
      <p>Proximamente...</p>
    </section>
  );
}