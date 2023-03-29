import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../Recursos/logorojo.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to='/'>Inicio</Link>
          <Link to='/intena'>Cómic</Link>
          <img className="casco" src={logo} alt="" />
          <Link to='/person'>Personajes</Link>
          <Link to='/quien'>Quien soy</Link>
        </nav>
      </div>
    </header>
  );
}
