import "../Quien/quien.css"
import marcos from "../../Recursos/1.png";

export default function Quien() {
    return (
      <section>
      <div className="container">
          <div className="row introduccion">
              <div className="text_introduccion">
                  <article className="introt" id="quien">
                      <h2>Marcos rojas</h2>
                      <p className="textintro">
                      Hola! Soy Marcos Rojas un joven estudiante de Producción de multimedia me encanta el diseño, y la creación de personajes también la creación de modelos 3D, y me considero una persona bastante creativa en esta página web se evidencia esto, acá hay algunos de los trabajos de mi proyecto formativo Intena (INT).
                      </p>
                  </article>
              </div>
              <div className="introdImg">
              <article className="imgCoci">
                    <img className="marcos" src={ marcos} alt="" />
              </article>
          </div>
          </div>
      </div>
  </section>

    );
}