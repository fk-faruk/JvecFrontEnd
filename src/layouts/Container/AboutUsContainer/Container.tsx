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
      <div className="relative " style={{ marginTop: "10vh" }}>
        <img src={svg} alt="" className="w-full" />

        <img
          src={image}
          alt="Overlay"
          style={{ top: "10px", left: "25%" }}
          className="absolute  object-cover"
        />
      </div>
      <Slider />

      <div
        className=" text-white text-center contStyle"
        style={{ marginTop: "10vh" }}
      >
        <h4 className=" text-6xl font-medium">
          Why we are your Trusted Consultant
        </h4>
        <h6 className="text-xl mt-8 font-extralight  text-white">
          Empowering Businesses with Cutting-edge Technology
        </h6>

        <h5
          className="text-3xl font-extralight"
          style={{ margin: "4vh", lineHeight: 1.5 }}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of{" "}
          <br />
          excellence is the driving force behind our success. Excellence is our{" "}
          <br />
          legacy, and we are proud to carry it forward.{" "}
        </h5>

        <h6 className="text-xl font-extralight  text-white">
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </h6>

        <div className="justify-center flex mt-5">
          <img src={image2} alt="" />
        </div>
      </div>

      <div
        className="text-white text-center "
        style={{ marginTop: "10vh", backgroundColor: "#05071e" }}
      >
        <h4 className=" text-6xl font-medium">Our Offerings</h4>

        <h5
          className="text-3xl font-extralight"
          style={{ margin: "4vh", lineHeight: 1.5 }}
        >
          Leverage KeySystem’s cutting-edge expertise to transform your <br />
          business. Our tailored software and cybersecurity solutions drive{" "}
          <br />
          efficiency, security, and growth. We empower businesses to <br />
          thrive in the digital age
        </h5>

        <Button className="b-radius " text="Learn more" />

        <div className="">
          <div className=" grid grid-cols-3" style={{ marginTop: "8vh" }}>
            <div className="col-span-1">
              <TButton text="Core banking services" className="buttonColor" />
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="Digital Banking & financial inclusion"
                className="buttonColor"
              />
            </div>
            <div className="col-span-1">
              <TButton
                text="Online/mobile lending solution"
                className="buttonColor"
              />
            </div>
          </div>
          <div className=" grid grid-cols-3" style={{ marginTop: "4vh" }}>
            <div className="col-span-1">
              <TButton
                text="Staff augmentation solutions"
                className="buttonColor"
              />
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="Internal audit solutions"
                className="buttonColor"
              />
            </div>
            <div className="col-span-1">
              <TButton text="Data Warehouse" className="buttonColor" />
            </div>
          </div>

          <div className=" grid grid-cols-3" style={{ marginTop: "4vh" }}>
            <div className="col-span-1">
              <TButton text="Business Intelligence" className="buttonColor" />
            </div>
            <div className="col-span-1   " style={{ marginTop: "6vh" }}>
              <TButton
                text="KeySystem software testing"
                className="buttonColor"
              />
            </div>
            <div className="col-span-1">
              <TButton text="Cybersecurity Solutions" className="buttonColor" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-center " style={{ marginTop: "25vh" }}>
        <h4 className=" text-5xl font-medium">What we Represent</h4>

        <h6 className="text-xl font-extralight my-6">
          Our relentless pursuit of excellence is the driving force <br />{" "}
          behind our success
        </h6>

        <h5
          className="text-2xl font-extralight"
          style={{ margin: "4vh", lineHeight: 1.5 }}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force <br />
          behind our success. Excellence is our legacy, and we are proud to
          carry it forward. Watch <br />
          the video to see how we are innovating to keep businesses on top of
          their games.
        </h5>

        <div
          className="grid grid-cols-2 gap-16 "
          style={{ marginLeft: "30vh", marginRight: "30vh" }}
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
