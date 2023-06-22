import "./Footer.scss";
import imgFooter from "../assets/images/footer_arcenciel.png";
import imgInstagram from "../assets/images/instagram.png";
import imgFacebook from "../assets/images/facebook.png";
import imgTwitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <div className="divFooter">
      <img src={imgFooter} alt="footer" />
      <div className="divVide" />
      <div className="divCredits">
        <p>Copyright - 2023</p>
        <p>Romain, Eloise, Jerome, Hugo, Fred, Martin</p>
      </div>
      <div className="divSocials">
        <div className="divInsta">
          <img id="instagram" src={imgInstagram} alt="instagram" />
        </div>
        <div className="divFacebook">
          <img id="facebook" src={imgFacebook} alt="facebook" />
        </div>
        <div className="divTwitter">
          <img src={imgTwitter} alt="twitter" />
        </div>
        <div className="divContacts">
          <h2>Contact</h2>
          <p>Tel : +33 7 89 33 02 83</p>
          <p>Email : contact@DreamIT.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
