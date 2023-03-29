import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Animation from "../Asset/9.json";
import audio9 from "../Audio/9.mp3";
import ReactHowler from "react-howler";

const Escena9 = (props) => {
  const LottieRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [ViewPass, setViewPass] = useState(false);

  const changeView = () => {
    if (!isActive) {
      setViewPass(true);
    }
  };

  useEffect(() => {
    LottieRef.current.setSpeed(1);
    LottieRef.current.goToAndStop(1, true);
    if (ViewPass) {
      LottieRef.current.playSegments(0, 3);
    }
  }, [ViewPass]);

  return (
    <div>
      <div>
        <Lottie
          lottieRef={LottieRef}
          animationData={Animation}
          loop={false}
          onClick={changeView}
        />
        <ReactHowler src={audio9} playing={ViewPass} />
      </div>
      <div className="container_button">
        <div>
          <Link to="/escena8">
            <button className="buttoini">Capitulo anterior</button>
          </Link>
        </div>
        <div>
          <Link to="/escena10">
            <button className="buttoini">Siguiente capitulo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Escena9;
