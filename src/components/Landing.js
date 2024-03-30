import PrimaryButton from "./PrimaryButton";
import React from "react";
import LandingImage from "../images/Landing.png";

const Landing = () => {
  return (
    <section className="px-4 md:px-10 mt-16 text-center container mx-auto">
      <h1 className="font-body-medium text-center text-white text-4xl md:text-6xl">
        Ultimate Fitness Destination <br /> for Unleashing Your Potential!
      </h1>
      <p className="font-primary text-center text-gray-400 mt-6">
        Our state-of-the-art facility is equipped with everything you need to
        achieve your fitness goals, <br /> whether you're a beginner or a
        seasoned athlete.
      </p>
      <div className="mt-6 mb-10">
        <PrimaryButton text={"Be a Member"} />
      </div>

      <div className="text-center my-10">
        <img src={LandingImage} alt="" className="rounded-lg mx-auto" />
      </div>
    </section>
  );
};

export default Landing;
