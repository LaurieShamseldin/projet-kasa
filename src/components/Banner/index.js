import './style.css';

const Banner = ({ image, textImage, text }) => {
  return (
    <section className="banner">
      <h1 className="banner__txt">{text}</h1>
      <img className="banner__img" src={image} alt={textImage} />
    </section>
  );
};

export default Banner;
