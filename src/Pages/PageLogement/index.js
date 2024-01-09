import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Score from "../../components/Score";
import logements from "../../data/logements.json";

import './style.css';

const PageLogement = () => {
  const { id } = useParams();
  const pageLogement = logements.find((logement) => logement.id === id);

  const allEquipements = pageLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });
  
  return (
    <>
    {pageLogement ? (
      <div className="page__logement">
        <Carousel pictures={pageLogement?.pictures} />
        <section className="logement__info">
          <div className="logement__description">
            <h2 className="logement__title">{pageLogement.title}</h2>
            <span className="logement__city">{pageLogement.location}</span>
            <ul className="logement__tags">
              {pageLogement.tags.map((tag, i) => (
                  <Tag key={i} title={tag} />
              ))}
            </ul>
          </div>

          <div className="logement__more">
          <Host image={pageLogement.host.picture} nameHost={pageLogement.host.name}/>
          <Score score={pageLogement.rating}/>
          </div>
        </section>

        <section className="logement__dropdown">
          <Collapse description={pageLogement.description} title="Description"/>
          <Collapse description={allEquipements} title="Équipements"/>
        </section>
      </div>
      ) : (
        <Navigate replace to="/404" />
      )};
     </>
  );
};

export default PageLogement;
