import "./person.css"
import klaus1 from "../../Recursos/carta klaus.jpg"
import mam from "../../Recursos/carta mamá.jpg"
import pap from "../../Recursos/carta papá.jpg"
import solda from "../../Recursos/carta soldado.jpg"

export default function Personajes() {
  return (
    <section className="personajes" id="per">
      <div className="row personaje">
        <div className="col-3">
          <article className="person">
            <img src={klaus1} alt="" />
          </article>
        </div>
        <div className="col-3">
          <article className="person">
            <img src={mam} alt="" />
          </article>
        </div>
        <div className="col-3">
          <article className="person">
            <img src={pap} alt="" />
          </article>
        </div>
        <div className="col-3">
          <article className="person">
          <img src={solda} alt="" />
        </article>
        </div>
      </div>
    </section>

  );
}