import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Animation from '../Asset/10.json';
import ReactHowler from "react-howler";
import audiobatalla from "../Audio/audio batalla.mp3";


const Escena_10 = (props) => {
    const LottieRef = useRef();
    const [isActive, setIsActive] = useState(false)
    const [ViewPass, setViewPass] = useState(false)

    const changeView = () => {
        if (!isActive) {
            setViewPass(true)
        }
    }

    useEffect(() => {
        LottieRef.current.setSpeed(1)
        LottieRef.current.goToAndStop(1, true)
        if (ViewPass) {
            LottieRef.current.playSegments(0, 3)
        }
    }, [ViewPass])

    return (
        <div>
            <div>
                <Lottie lottieRef={LottieRef} animationData={Animation} loop={false} onClick={changeView} />
                <ReactHowler src={audiobatalla} playing={ViewPass}/>
            </div>
            <div className="container_button">
                <div>
                    <Link to='/escena9'>
                        <button className="buttoini">Capitulo anterior</button>
                    </Link>
                </div>
                <div><Link to='/escena11'>
                    <button className="buttoini">Siguiente capitulo</button>
                </Link>
                </div>
            </div>
        </div>
    )

};
export default Escena_10;