import React from "react";
import "./Contactus.css";
import Button from "../../../components/CButton/Button";
import Frame from '../../../assets/frame200.png'

const ContactUs = () => {
  return (
    <section className="containerBg w-full" id="Contact">
      <div className="grid grid-col-1 md:grid-cols-4 backgroundCont">
        <div className="col-span-3">
          <div className="text-white " style={{ margin: "4vh" }}>
            <h4 className=" text-3xl md:text-5xl font-medium">Ready to get started?</h4>

            <h6 className="text-lg md:text-xl font-extralight my-6">Shoot us a Mail</h6>

            <h5
              className="text-lg md:text-2xl font-extralight"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                Join numerous corporations, organizations, and businesses as
                they <br />
                scale their teams, tap into new market opportunities and build{" "}
                <br />
                innovative products with KeySystem Technology. <br />
              </span>

              <div className="my-4">
                Join thousands of students who are ready to learn new skills or
                take <br />
                their career to the next level by enrolling in one of our
                training <br />
                programs today.
              </div>
            </h5>
            <Button text="Send Us a Mail Now" className="b-radius mt-6"/>
          </div>

          
        </div>
        <div className="md:col-span-1 hidden md:block" >
            <img src={Frame} alt="" className="w-full imageRad"  />
        </div>
      </div> 
    </section>
  );
};

export default ContactUs;
