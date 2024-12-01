import React from "react";
import Hero from "./Hero";// Import the child component

const FeaturedCars = () => {

  const carData = [
    {
      carImage: "Honda_City.jpg",
      carName: "Honda City",
      carPrice: " 4,649,000",
      carReviews: "Excellent performance and range",
    },
    {
      carImage: "HondaCivic.jpg",
      carName: "Honda Civic",
      carPrice: "8,659,000",
      carReviews: "Great driving experience",
    },
    {
      carImage: "HondaBR-V.png",
      carName: "Honda BR-V",
      carPrice: " 6,299,000",
      carReviews: "Luxury SUV with advanced features",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl text-center p-8 hover:underline">Car List</h1>
      <div className="flex justify-center items-center ">
      {carData.map((car, details) => (
        <Hero
          key={details} // Unique key for React
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
