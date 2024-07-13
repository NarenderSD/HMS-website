import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to Narender Medical Center, where your health is our mission. 
          We combine cutting-edge technology with compassionate care to deliver 
          personalized medical services tailored to your unique needs.
          </p>
          <p>In 2024, we’re excited to unveil our innovative MERN stack project, 
            enhancing your digital healthcare experience with seamless access to medical records, 
            appointments, and direct communication with our team.</p>
          <p>Join us on the journey to a healthier, brighter future at Narender Medical Center.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
