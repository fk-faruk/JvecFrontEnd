import React from "react";
import boxImage from "../../../assets/boxImage.png";
import handImage from "../../../assets/HandImage.png";
import checkImage from '../../../assets/check.png'

import "./ProcessContainer.css"

const ProcessContainer = () => {
  return (
    <div>
      <div className="text-center text-white" style={{ marginTop: "10vh" }}>
        <h4 className=" text-5xl font-medium">Our Process</h4>

        <h6 className="text-xl font-extralight my-6">
          At KeySystem, we leave you with a lasting impression
        </h6>
      </div>

      <div className="grid col-span-4 mx-auto" style={{ width: "70vw" }}>
        <div
          className="col-span-2 w-full flex flex-row justify-between bgProcess"
          
        >
          <div
            className=" text-white pl-8 "
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <h4 className=" text-4xl font-medium">Strategic Consultation</h4>

            <h6 className="text-xl font-extralight my-6">
              We kick off with a strategic consultation to <br />
              understand your brand, goals, and audience
            </h6>
          </div>
          <div>
            <img src={boxImage} alt="" />
          </div>
        </div>
        
        <div className="flex flex-row col-span-2 pt-8">

        <div  
            className=""
            style={{  width: "100%"}}
          >
            <div
              className=" w-full flex flex-row justify-between bgProcess"
              style={{  height:'25vh' }}
            >
              <div
                className=" text-white pl-8 "
                style={{ marginTop: "auto"  , marginBottom: "auto",  }}
              >
                <h4 className=" text-4xl font-medium">Collaboration</h4>

                <h6 className="text-xl font-extralight my-6">
                At KeySystem, we collaborate <br /> closely to ensure the end result <br /> meets your expectations and  makes you happy
                </h6>
              </div>
              <div className="flex flex-row items-end align-bottom" style={{}}>
                <img src={handImage} alt="" />
              </div>
            </div>
          </div>
      
          <div
            className=""
            style={{  width: "100%"}}
          >
            <div
              className=" w-full flex flex-row justify-between bgProcess"
              style={{  height:'25vh' }}
            >
              <div
                className=" text-white pl-8 "
                style={{ marginTop: "auto", marginBottom: "auto",  }}
              >
                <h4 className=" text-4xl font-medium">Delivery</h4>

                <h6 className="text-xl font-extralight my-6">
                Our delivery rate is 100%; our <br /> clients deserve nothing less.
                </h6>
              </div>
              <div className="flex flex-row items-end align-bottom" style={{}}>
                <img src={checkImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessContainer;
