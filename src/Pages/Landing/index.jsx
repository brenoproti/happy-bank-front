import LogoImg from "../../images/logo.png";
import LandingImg from "../../images/landing.svg";
import { Link } from "react-router-dom";
import "./styles.css";

import { BiLogInCircle, BiEdit } from "react-icons/bi";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="page-landing-content container">
        <div className="logo-container">
          <img src={LogoImg} alt="" />
          <h2>Sua felicidade começa aqui</h2>
        </div>

        <img src={LandingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/login" className="login">
            <BiLogInCircle />
            Login
          </Link>

          <a href="#" className="create-account">
            <BiEdit />
            Criar conta
          </a>
        </div>
      </div>
    </div>
  );
}
