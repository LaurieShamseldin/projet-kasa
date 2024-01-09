import fullstar from '../../assets/fullstar.svg';
import emptystar from '../../assets/emptystar.svg';
import './style.css';

const Score = ({ score }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="score">
      {stars.map((star) =>
        score >= star ? (
          <img key={star.toString()} src={fullstar} alt="Etoile pleine"/>
        ) : (
          <img key={star.toString()} src={emptystar} alt="Etoile vide"/>
        )
      )}
    </div>
  );
};

export default Score;
