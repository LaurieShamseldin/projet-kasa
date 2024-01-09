import { NavLink } from 'react-router-dom';
import './style.css';

const ErrorPage = () => (
  <div className="errorPage">
    <h1 className="errorPage__title">404</h1>
    <p className="errorPage__text">Oups! La page que vous demandez n'existe pas.</p>
    <NavLink
      to="/"
      className="errorPage__link"
    >
      Retourner sur la page d’accueil
    </NavLink>
    
  </div>
);

export default ErrorPage;
