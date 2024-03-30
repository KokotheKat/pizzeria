import React, { useState } from "react";
import "../styles/Carousel.scss";

export const Carousel = () => {
  const [imagen, setImagen] = useState(1);

  const handleNextButton = () => {
    if (imagen < 5) {
      setImagen(count=> count + 1);
    } else {
      setImagen(1);

    }
  };

  const handlePrevButton = () => {
    if (imagen > 1) {
      setImagen(count=> count - 1);
    } else {
      setImagen(5);
    }
    
  };
  
  console.log("handlePrevButton",imagen)
  return (
    <div className="Carousel">
      <button className="Carousel-Left" onClick={handlePrevButton}>
        {"<"}{" "}
      </button>
      <div className="Carousel-ImgContainer"style={{transform:`translateX(${imagen===1?0:(imagen-1)*-100}%)`}}>
        <img  draggable="false" 
          src="src/assets/pizzas/pizza-1.jpg"
          className="Carousel-Image"
          alt=""
        />
        <img  draggable="false" 
          src="src/assets/pizzas/pizza-2.jpg"
          className="Carousel-Image"
          alt=""
        />
        <img  draggable="false" 
          src="src/assets/pizzas/pizza-7.jpg"
          className="Carousel-Image"
          alt=""
        />
        <img  draggable="false" 
          src="src/assets/pizzas/pizza-4.jpg"
          className="Carousel-Image"
          alt=""
        />
        <img  draggable="false" 
          src="src/assets/pizzas/pizza-5.jpg"
          className="Carousel-Image"
          alt=""
        />
      </div>
      <button className="Carousel-Right" onClick={handleNextButton}>
        {">"}
      </button>

    </div>
  );
};
