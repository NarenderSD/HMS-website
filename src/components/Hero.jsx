import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Narender Medical Center is a premier healthcare facility 
          dedicated to delivering top-notch medical services with 
          empathy and excellence. Our team of highly skilled professionals 
          is committed to offering personalized care that meets each patient's 
          unique needs. At Narender Medical Center, we place your health and 
          well-being at the forefront, guiding you on a seamless journey to 
          optimal health and wellness. Trust us to be your partner in achieving a healthier, happier life.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
