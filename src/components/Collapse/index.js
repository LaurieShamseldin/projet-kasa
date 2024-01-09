import { useState } from "react";

import './style.css';

const Collapse = ({ title, description}) => {

  const [isOpen, setIsOpen] = useState(false);

  const displayCollapse = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="collapse" onClick={displayCollapse}>
      <div className="collapse__title">
        <h2>{title}</h2>
        <div className="collapse__dropdown">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
            ) : (  <i className="fa-solid fa-chevron-down"></i> 
            )
          }
        </div>
      </div>
      {isOpen && 
      <div className="collapse__content">
       <p>{description}</p>
      </div> }
    </div>
  );
};

export default Collapse;
