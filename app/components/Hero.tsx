import React from "react";

type HeroCardProps = {
    carImage: string;
    carName: string;
    carPrice: string;
    carReviews: string;
  };

const Hero: React.FC<HeroCardProps> = ({ carImage, carName, carPrice, carReviews}) => {
  return (
    <div style={{ border: "1px solid black", margin: "60px", padding: "60px" }}>
      <img src={carImage} alt={carName} style={{ width: "200px" }} />
      <h3>{carName}</h3>
      <p>Price: {carPrice}</p>
      <p>Reviews: {carReviews}</p>
    </div>
  );
};

export default Hero;