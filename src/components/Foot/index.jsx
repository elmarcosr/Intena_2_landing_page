/* eslint-disable jsx-a11y/anchor-is-valid */
import "./foot.css";
import logo from "../../Recursos/logorojo.png";
import facex from "../../Recursos/Redes_sociales/facebook.png";
import twite from "../../Recursos/Redes_sociales/youtube.png";
import insta from "../../Recursos/Redes_sociales/instagram.png";


export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="col-4 p-1 div_logo">
          <img className="logofoot" src={logo} alt="" />
        </div>
        <div className="col-4 d-flex p-3 redes">
          <section className="d-flex">
            <a href="#" className="btn-main p-2">
              <img src={facex} alt="" />
            </a>
            <a href="#" className="btn-main p-2">
              <img src={twite} alt="" />
            </a>
            <a href="#" className="btn-main p-2">
              <img src={insta} alt="" />
            </a>
          </section>
        </div>
        <div className="col-4 textfo div_logo">
          <font color="#ffc87a">
            <h4>DERECHOS RESERVADOS</h4>
          </font>
        </div>
      </div>
    </footer>
  );
}
