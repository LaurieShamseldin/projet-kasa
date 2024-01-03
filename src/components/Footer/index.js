import Logo from '../../assets/white-logo.png';
import './style.css';

const Footer = () => (
  <div className="footer">
     <img src={Logo} alt="Logo Kasa"/> 
    <span className="footer__credit">© 2024 Kasa. All rights reserved</span>
  </div>
);

export default Footer;
