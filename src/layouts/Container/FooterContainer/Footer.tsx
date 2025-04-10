import React from "react";
import Logo from "../../../assets/pageLogo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ marginLeft: "10vh", marginRight: "10vh" }}>
      <div className="grid grid-cols-3 w-full text-white mt-6 ">
        <div
          className="text-center text-xs "
          style={{  }}
        >
          <div className="flex flex-row justify-center">
            <img src={Logo} alt="" style={{ height: "8vh" }} />
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
            <h6 className="text-3xl font-extrabold ">Services</h6>
            <ol
              className="text-xl font-light mt-2 "
              style={{ lineHeight: 1.8 }}
            >
              <li>Core refresh</li>
              <li>Application management services</li>
              <li>Evolution & enhancement services</li>
              <li>Solution Assurance & validation</li>
              <li>Digital Banking & financial inclusion</li>
              <li>Online/mobile lending solution</li>
            </ol>
          </div>
        </div>

        <div
          className=" flex flex-row justify-start"
          style={{  paddingTop: "6vh" }}
        >
          <div>
            <ol
              className="text-xl font-light mt-2 "
              style={{ lineHeight: 1.8 }}
            >
              <li>Staff augmentation solutions</li>
              <li>Risk management & Internal audit solutions</li>
              <li>Data Warehouse & Business Intelligence (BI)</li>
              <li>Enterprise Document Management Solutions</li>
              <li>KeySystem software testing</li>
              <li>Cybersecurity Solutions</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full text-white " style={{marginTop:'8vh', marginBottom:'4vh'}}>
        <div className=" text-xs " style={{ }}>
          <div className="flex flex-row justify-center">
            <div>
              <h6 className="text-3xl font-extrabold ">Quick Links</h6>
              <ol
                className="text-xl font-light mt-2 "
                style={{ lineHeight: 1.8 }}
              >
                <li>About Us</li>
                <li> Site Map</li>
              </ol>
            </div>
          </div>
        </div>

        <div
          className=" flex flex-row justify-start"
          style={{  }}
        >
          <div>
            <h6 className="text-3xl font-extrabold ">Contact</h6>
            <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
              Nigeria
            </span>
            <div className="text-xl font-extralight">
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
          <div style={{ marginTop: "4vh" }}>
            {/* <h6 className="text-3xl font-extrabold "></h6> */}
            <span className="text-xl font-bold ">United Kingdom</span>
            <div className="text-xl font-extralight">
              39 Kenyon Lane, Off Moston <br /> Lane,Moston, Manchester, <br />{" "}
              United Kingdom, M40 9JG
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full text-white" style={{marginTop:'4vh'}}>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <div className="flex flex-row  mt-6" style={{gap:'8vw'}}>
            <div>
              <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
                Nigeria
              </span>
              <div className="text-xl font-extralight">
                Tel: +44 161 948 1444
              </div>
            </div>

            <div>
            <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
            United Arab Emirates
              </span>
              <div className="text-xl font-extralight">
              Tel:   +971 50 423 8817
              </div>
            </div>
            <div>
            <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
            Canada
              </span>
              <div className="text-xl font-extralight">
              Tel:  +1 647 977 1435
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 w-full text-white" style={{marginTop:'4vh', marginBottom:'4vh'}}>
      <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="flex flex-row  mt-6" style={{gap:'9vw'}}>
            <div>
              <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
              United Kingdom
              </span>
              <div className="text-xl font-extralight">
                Tel: +44 161 948 1444
              </div>
            </div>

            <div>
            <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
            Nigeria              </span>
              <div className="text-xl font-extralight">
              Tel:  +234 818 444 1404           
              </div>
            </div>
            <div>
            <span className="text-xl font-bold " style={{ marginTop: "5px" }}>
            Email              </span>
              <div className="text-xl font-extralight">
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
