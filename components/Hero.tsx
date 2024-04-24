import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,Book or Rent a car quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quidem, illum at aut id enim possimus blanditiis doloribus? Recusandae, expedita.
        </p>
        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
