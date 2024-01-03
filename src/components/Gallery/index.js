import logements from "../../data/logements.json";
import { NavLink } from 'react-router-dom';
import Card from "../../components/Card";
import './style.css';

const Gallery = () => (
  <section className="home__gallery">
    <div className="home__list">
      {logements.map((logement) => (
            <article key={logement.id} className="home__logement">
              <NavLink to={`/logement/${logement.id}`}>
                <Card image={logement.cover} title={logement.title} className="home__card"/>
              </NavLink>
            </article>
      ))};
    </div>
  </section>
);

export default Gallery;
