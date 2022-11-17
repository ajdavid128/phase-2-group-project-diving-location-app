import DivrTransparent from "../Images/DivrResize.png"
import { Link } from "react-router-dom";

function LandingPage() {

    return (
        <Link to={'/home'}>
            <img className="divrLogo" src={DivrTransparent} alt="Divr Logo"/>
        </Link>
    )
}

export default LandingPage;