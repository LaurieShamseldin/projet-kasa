import './style.css';

const Host = ({ image, nameHost }) => {
  return (
    <div className="host">
      <h3 className="host__name">{nameHost}</h3>
      <img src={image} alt={nameHost} className="host__img"/>
    </div>
  );
};

export default Host;
