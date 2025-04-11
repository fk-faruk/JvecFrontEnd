// import React from "react";
import Logo from "../../../assets/pageLogo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




import "./Footer.css";

const Footer = () => {
  return (
    <div className="padding ">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 w-full text-white mt-6 ">
        <div
          className="md:text-center text-xs "
          style={{  }}
        >
          <div className="flex flex-row md:justify-center">
            <img src={Logo} alt="" className="md:h-20"/>
          </div>
          <div className="mt-2">
            &copy; 2025 KeySystem Technology Limited. All rights reserved.
          </div>
        </div>

        <div
          className=" flex flex-row justify-start"
          style={{  paddingTop: "2vh" }}
        >
          <div>
            <h6 className="text-xl md:text-3xl font-extrabold ">Services</h6>
            <ol
              className="text-sm md:text-xl font-light mt-2 "
              style={{ lineHeight: 1.8 }}
            >
              <li className="cursor-pointer">Core refresh</li>
              <li className="cursor-pointer">Application management services</li>
              <li className="cursor-pointer">Evolution & enhancement services</li>
              <li className="cursor-pointer">Solution Assurance & validation</li>
              <li className="cursor-pointer">Digital Banking & financial inclusion</li>
              <li className="cursor-pointer">Online/mobile lending solution</li>
            </ol>
          </div>
        </div>

        <div
          className=" flex flex-row justify-start"
          style={{  paddingTop: "5vh" }}
        >
          <div>
            <ol
              className="text-sm md:text-xl font-light mt-2 "
              style={{ lineHeight: 1.8 }}
            >
              <li className="cursor-pointer">Staff augmentation solutions</li>
              <li className="cursor-pointer">Risk management & Internal audit solutions</li>
              <li className="cursor-pointer">Data Warehouse & Business Intelligence (BI)</li>
              <li className="cursor-pointer">Enterprise Document Management Solutions</li>
              <li className="cursor-pointer">KeySystem software testing</li>
              <li className="cursor-pointer">Cybersecurity Solutions</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 w-full text-white " style={{marginTop:'8vh', marginBottom:'4vh'}}>
        <div className=" text-xs " style={{ }}>
          <div className="flex flex-row md:justify-center">
            <div>
              <h6 className="text-xl md:text-3xl font-extrabold ">Quick Links</h6>
              <ol
                className="text-sm md:text-xl font-light mt-2 "
                style={{ lineHeight: 1.8 }}
              >
                <li>About Us</li>
                <li> Site Map</li>
              </ol>
            </div>
          </div>
        </div>

        <div
          className=" flex mt-4 flex-row justify-start"
          style={{  }}
        >
          <div>
            <h6 className="text-xl md:text-3xl font-extrabold ">Contact</h6>
            <span className="md:text-xl text-lg font-bold " style={{ marginTop: "5px" }}>
              Nigeria
            </span>
            <div className="md:text-xl text-sm font-extralight">
              55G Adebisi Omotola Close,
              <br />
              Off Samuel Adedoyin Street,
              <br />
              Victoria Island
            </div>
          </div>
        </div>

        <div
          className=" flex flex-row justify-start"
          style={{  }}
        >
          <div style={{ marginTop: "3vh" }}>
            {/* <h6 className="text-3xl font-extrabold "></h6> */}
            <span className="md:text-xl text-lg font-bold ">United Kingdom</span>
            <div className="text-sm md:text-xl font-extralight">
              39 Kenyon Lane, Off Moston <br /> Lane,Moston, Manchester, <br />{" "}
              United Kingdom, M40 9JG
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 w-full text-white" style={{marginTop:'4vh'}}>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex flex-row  mt-6" style={{gap:'8vw'}}>
            <div>
              <span className="md:text-xl text-lg font-bold " style={{ marginTop: "5px" }}>
                Nigeria
              </span>
              <div className="md:text-xl text-sm  font-extralight">
                Tel: +44 161 948 1444
              </div>
            </div>

            <div>
            <span className="md:text-xl text-lg  font-bold " style={{ marginTop: "5px" }}>
            United Arab Emirates
              </span>
              <div className="md:text-xl text-sm font-extralight">
              Tel:   +971 50 423 8817
              </div>
            </div>
            <div>
            <span className="md:text-xl text-lg  font-bold " style={{ marginTop: "5px" }}>
            Canada
              </span>
              <div className="md:text-xl text-sm  font-extralight">
              Tel:  +1 647 977 1435
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 w-full text-white" style={{marginTop:'4vh', marginBottom:'4vh'}}>
      <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="flex flex-row  mt-6" style={{gap:'7vw'}}>
            <div className="flex flex-row gap-4">
              <a href=""> <AiFillInstagram fontSize={30} className="fontStyle"/></a>
              <a href=""><FaXTwitter fontSize={30} className="fontStyle"/> </a>
              <a href=""> <FaLinkedin fontSize={30} className="fontStyle"/></a>
              <a href="">  <FaFacebook fontSize={30} className="fontStyle"/></a>
            
             
             
            
             
            
            </div>

            <div>
            <span className="md:text-xl text-lg font-bold " style={{ marginTop: "5px" }}>
            Nigeria              </span>
              <div className="md:text-xl text-sm font-extralight">
              Tel:  +234 818 444 1404           
              </div>
            </div>
            <div className="">
            <span className="md:text-xl text-lg font-bold " style={{ marginTop: "5px" }}>
            Email              </span>
              <div className="md:text-xl text-sm  font-extralight">
              enquiries@keysystemltd.com
                            </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Footer;
