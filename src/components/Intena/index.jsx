import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Animation from '../Asset/1.json';
import ReactHowler from "react-howler";
import audioini from "../Audio/inicio.mp3";
import "./index.css"

const Intena = (props) =>{
  const LottieRef = useRef();
  const [isActive, setIsActive] = useState(false)
  const [ ViewPass, setViewPass] = useState(false)

  const changeView = () =>{
    if (!isActive) {
      setViewPass(true)
    }
  }

useEffect( () => {
  LottieRef.current.setSpeed(1)
  LottieRef.current.goToAndStop(1,true)
  if (ViewPass) {
    LottieRef.current.playSegments(0,3)
  }
},[ViewPass])

return(
  <div>
    <div>
    <Lottie className="comic" lottieRef={LottieRef} animationData={Animation} loop={false} onClick={changeView}/>
    <ReactHowler src={audioini} playing={ViewPass}/>
    </div>
    <div className="containerbut">
      <Link to='/escena2'>
      <button className="butto">Siguiente capitulo</button>
      </Link>
    </div>
  </div>
)

};  
export default Intena;