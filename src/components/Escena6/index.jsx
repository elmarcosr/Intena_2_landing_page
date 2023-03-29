import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Animation from "../Asset/6.json";
import audio6 from "../Audio/6.mp3";
import ReactHowler from "react-howler";

const Escena6 = (props) => {
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
        <ReactHowler src={audio6} playing={ViewPass} />
      </div>
      <div className="container_button">
        <div>
          <Link to="/escena5">
            <button className="buttoini">Capitulo anterior</button>
          </Link>
        </div>
        <div>
          <Link to="/escena7">
            <button className="buttoini">Siguiente capitulo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Escena6;
