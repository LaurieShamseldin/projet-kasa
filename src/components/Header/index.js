import Logo from '../../assets/logo-kasa.png';
import { NavLink } from 'react-router-dom';
import './style.css';


const Header = () => (
  <header className="header">
   <div className="header__info">
    <NavLink to="/">
       <img src={Logo} alt="Logo Kasa"/> 
    </NavLink>
      <div className="header__links">
          <NavLink
            to="/"
            activeclassname="active"
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            activeclassname="active"
          >
            A propos
          </NavLink>

        </div>
    </div>
  </header>
);

export default Header;
