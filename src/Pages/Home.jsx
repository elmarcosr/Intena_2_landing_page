import Banner from "../components/Banner";
import Introduccion from "../components/Introd";
import Personajes from "../components/Person";
import Quiem from "../components/Quien";


function Home() {
    return(
        <div>
            <Banner />
            <Introduccion />
            <Personajes />
            <Quiem />
        </div>
    );
}
export default Home;