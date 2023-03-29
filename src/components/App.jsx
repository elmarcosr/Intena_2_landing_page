import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../components/Header";
import Footer from "../components/Foot";
import Comic from "../Pages/Comic";
import Escena2 from "../Pages/Escena2";
import Escena3 from "../Pages/Escena3";
import Escena4 from "../Pages/Escena4";
import Escena5 from "../Pages/Escena5";
import Escena6 from "../Pages/Escena6";
import Escena7 from "../Pages/Escena7";
import Escena8 from "../Pages/Escena8";
import Escena9 from "../Pages/Escena9";
import Escena10 from "../Pages/Escena10";
import Escena11 from "../Pages/Escena11";
import Escena12 from "../Pages/Escena12";
import Personajes from "../components/Person";
import Quien from "../components/Quien";


function App() {
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/intena" element={<Comic />}/>
            <Route path="/escena2" element={<Escena2 />}/>
            <Route path="/escena3" element={<Escena3 />}/>
            <Route path="/escena4" element={<Escena4 />}/>
            <Route path="/escena5" element={<Escena5 />}/>
            <Route path="/escena6" element={<Escena6 />}/>
            <Route path="/escena7" element={<Escena7 />}/>
            <Route path="/escena8" element={<Escena8 />}/>
            <Route path="/escena9" element={<Escena9 />}/>
            <Route path="/escena10" element={<Escena10 />}/>
            <Route path="/escena11" element={<Escena11 />}/>
            <Route path="/escena12" element={<Escena12 />}/>
            <Route path="/person" element={<Personajes />}/>
            <Route path="/quien" element={<Quien />}/>
        </Routes>
        <Footer/>
        </>
    );
}
export default App;