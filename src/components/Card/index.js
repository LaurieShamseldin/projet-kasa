import './style.css';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img className="card__img" src={image} alt={title} />
      <span className="card__title">{title}</span>
    </div>
  );
};

export default Card;
