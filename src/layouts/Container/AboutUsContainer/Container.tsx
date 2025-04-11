import React from "react";
import svg from "../../../assets/Vector.png";
import image from "../../../assets/Rectangle.png";
import Slider from "../../../components/Slider/Slider";
import image2 from "../../../assets/Rectangle2.png";
import Button from "../../../components/CButton/Button";
import Tcard from "../../../components/Cards/Card";
import logo1 from "../../../assets/17388719859221.png";
import logo2 from "../../../assets/17388719858902.png";
import CertContainer from "../CertContainer/CertContainer";
import PartnerContainer from "../PartnersContainer/PartnersContainer";
import ContactUs from "../contactUsContainer/Contactus";
import Footer from "../FooterContainer/Footer";

// import BButton from "../../../components/BButton/Button";

import "./Container.css";
import TButton from "../../../components/TButton/TButton";
import ProcessContainer from "../ProcessContainer/ProcessContainer";

const AContainer = () => {
  return (
    <div>
      <div>
      <div  style={{ marginTop: "10vh" }}>
        <div className="lg:relative ">
        <img src={svg} alt="" className="w-full  hide " />
        </div>
        <img
          src={image}
          alt="Overlay"
          className="displayImg  lg:block"
        />

      </div>
      </div>
     
      <div  className="slider">
      <Slider />
      </div>
      

      <div
        className=" text-white text-center contStyle"
        style={{ marginTop: "10vh" }}
        id="About"
      >
        <h4 className=" text-3xl md:text-5xl font-medium">
          Why we are your Trusted Consultant
        </h4>
        <h6 className="text-sm fontT mt-8 font-extralight  text-white">
          Empowering Businesses with Cutting-edge Technology
        </h6>

        <h5
          className="text-lg fontM font-extralight"
          style={{ margin: "4vh", lineHeight: 1.5 }}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of{" "}
          <br />
          excellence is the driving force behind our success. Excellence is our{" "}
          <br />
          legacy, and we are proud to carry it forward.{" "}
        </h5>

        <h6 className="text-sm fontT font-extralight  text-white">
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </h6>

        <div className="justify-center flex mt-5">
          <img src={image2} alt="" />
        </div>
      </div>

      <div
        className="text-white text-center "
        style={{ paddingTop: "10vh" , paddingBottom:'5vh',  backgroundColor: "#05071e" }}
        id="Services"
      >
        <h4 className=" text-3xl md:text-5xl font-medium">Our Offerings</h4>

        <h5
          className="text-lg fontM font-extralight"
          style={{ margin: "4vh", lineHeight: 1.3 }}
        >
          Leverage KeySystem’s cutting-edge expertise to transform your <br />
          business. Our tailored software and cybersecurity solutions drive{" "}
          <br />
          efficiency, security, and growth. We empower businesses to <br />
          thrive in the digital age
        </h5>

        <Button className="b-radius " text="Learn more" />

        <div className=" marginS" >
          <div className=" md:grid md:grid-cols-3" style={{ marginTop: "8vh" }}>
            <div className="col-span-1">
              <TButton text="Core banking services" className="buttonColor" icon = {true}/>
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="Digital Banking & financial inclusion"
                className="buttonColor " icon = {true}
              />
            </div>
            <div className="col-span-1">
              <TButton
                text="Online/mobile lending solution"
                className="buttonColor " icon = {true}
              />
            </div>
          </div>
          <div className=" md:grid md:grid-cols-3" style={{ marginTop: "4vh" }}>
            <div className="col-span-1">
              <TButton
                text="Staff augmentation solutions"
                className="buttonColor " icon = {true}
              />
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="Internal audit solutions"
                className="buttonColor " icon = {true}
              />
            </div>
            <div className="col-span-1">
              <TButton text="Data Warehouse" className="buttonColor " icon = {true} />
            </div>
          </div>

          <div className=" md:grid md:grid-cols-3" style={{ marginTop: "4vh" }}>
            <div className="col-span-1">
              <TButton text="Business Intelligence" className="buttonColor " icon = {true} />
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="KeySystem software testing"
                className="buttonColor " icon = {true}
              />
            </div>
            <div className="col-span-1">
              <TButton text="Cybersecurity Solutions" className="buttonColor " icon = {true} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-center " style={{ paddingTop: "10vh", paddingBottom:'10vh', backgroundColor:'#030416' }}>
        <h4 className="text-3xl md:text-5xl font-medium">What we Represent</h4>

        <h6 className="text-lg fontP font-extralight my-6">
          Our relentless pursuit of excellence is the driving force <br />{" "}
          behind our success 
        </h6>

        <h5
          className="text-lg fontP font-extralight"
          style={{ margin: "4vh", lineHeight: 1.3 }}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force <br />
          behind our success. Excellence is our legacy, and we are proud to
          carry it forward. Watch <br />
          the video to see how we are innovating to keep businesses on top of
          their games.
        </h5>

        <div
          className=" flexCol "
         
        >
          <div>
            <Tcard
              text="Our Vision"
              paraText="To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth"
              icon={logo1}
            />
          </div>
          <div>
            <Tcard
              text="Our Mission"
              paraText="We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage."
              icon={logo2}
            />
          </div>
        </div>
      </div>

      <CertContainer/>
      <ProcessContainer/>
      <PartnerContainer/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default AContainer;
