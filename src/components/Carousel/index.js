import { useState } from "react";
import './style.css';

const Carousel = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0); 
	const lengthPictures = pictures.length; 

  const nextImage = () => {
    setCurrentPicture(currentPicture === lengthPictures - 1 ? 0 : currentPicture + 1); 
  };
  const previousImage = () => {
    setCurrentPicture(currentPicture === 0 ? lengthPictures - 1 : currentPicture - 1); 
  };
  return (
    <section className="carousel">
      {pictures.map((picture, index) => (
        <div
          key={index} 
          className={
            currentPicture === index
              ? "slider active"
              : "slider"
          }
        >
          {index === currentPicture && <img src={picture} alt="Appartement" className="carrousel__img"/>}
          {index === currentPicture && (
            <div className="slider__number">
              {currentPicture + 1}/{lengthPictures}
            </div>
          )}
        </div>
      ))}

      <div className="carousel__control">
        {lengthPictures > 1 && (
          <p className="leftArrow" onClick={previousImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </p>
        )}
        {lengthPictures > 1 && (
          <p className="rightArrow" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        )}
      </div>
  </section>
  );
};

export default Carousel;
