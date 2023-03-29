import "./banner.css";
import cocina from "../../Recursos/banner_cocina.jpg";
import comedor from "../../Recursos/banner_comedor.png";
import render1 from "../../Recursos/render_1.jpg"
import render2 from "../../Recursos/render_3.jpg";

export default function Banner() {
  return (
    <section className="Banner">
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={comedor} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={cocina} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={render1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={render2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
