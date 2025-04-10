import React from "react";
import Button from "../../../components/CButton/Button";
import Frame from "../../../assets/Frame.png";
import Frame20 from '../../../assets/Frame20.png'

const CertContainer = () => {
  return (
    <div className="text-white text-center " style={{ marginTop: "25vh" }}>
      <h4 className=" text-5xl font-medium">
        Compliance Certifications/ <br />
        Standards We Specialize In
      </h4>

      <h6 className="text-xl font-extralight my-6">
        Elevate Your Organization's Security Posture with Our <br />{" "}
        Compliance/Standards Consulting Services
      </h6>

      <Button text="Contact Us" className="b-radius" />

      <div className="mx-auto " style={{ width: "70vw", marginTop: "10vh" }}>
        <div className="py-8 bg-white flex flex-row justify-center">
          <img src={Frame} alt="" />
        </div>
      </div>

      <div  style={{ marginTop: "25vh" }}>
        <h4 className=" text-5xl font-medium">They Trust Us</h4>

        <h6 className="text-xl font-extralight my-6">And so can you</h6>

        <div className="py-8 flex flex-row justify-center">
          <img src={Frame20} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CertContainer;
