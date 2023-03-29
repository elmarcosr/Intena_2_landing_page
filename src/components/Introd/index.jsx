import "./introd.css"
import rojas from "../../Recursos/banner_marcos_rojas.jpg";

export default function Introd() {
    return (
        <section>
            <div className="container">
                <div className="row introduccion">
                    <div className="text_introduccion">
                        <article className="introt">
                            <h2>Introduccion</h2>
                            <p className="textintro">
                            Bienvenidos sean a nuestro sitio web del comic interactivo "INTENA".           Esta página ha sido desarrollada por un grupo de personas en la cual           tuvieron como proyecto crear un Comic Interactivo para un público en           específico, el desarrollo de nuestro trabajo se basa en el           acontecimiento que sucedió en la Segunda Guerra Mundial, la Batalla de           Stalingrado.           <hr />           Esta ha sido una de las batallas más sangrientas de la historia y que           por su puesto, la que cambio drásticamente el resultado de una guerra           mundial, el equipo intena les trae un comic en la cual nos basamos en           un personaje ficticio del ejercito nazi que participa en La Batalla de           Stalingrado viendo todo lo acontecido, experiencias aterradoras y una           historia que todos algún día debemos conocer.
                            </p>
                        </article>
                    </div>
                    <div className="introdImg">
                    <article className="imgCoci">
                          <img className="cocina" src={ rojas } alt="" />
                    </article>
                </div>
                </div>
            </div>
        </section>
           
        );
    }