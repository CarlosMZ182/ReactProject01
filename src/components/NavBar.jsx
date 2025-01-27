import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import logo from '../assets/logo.jpg'
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo de la tienda"/>
      <span className="nombre-tienda">Sempai Store</span>
      </div>
      <div className="navbar-button">
      <ButtonComponent className="navbar-button" texto="Cartas" />
      <ButtonComponent className="navbar-button" texto="Figuras" />
      <ButtonComponent className="navbar-button" texto="Mangas" />
      <ButtonComponent className="navbar-button" texto="Juegos de Mesa" />
      </div>
      <CartWidget/>
    </nav>
  );
}