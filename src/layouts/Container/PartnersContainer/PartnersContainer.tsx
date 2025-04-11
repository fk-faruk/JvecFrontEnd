// import React from "react";
import partnerImage from '../../../assets/Frame11.png'


const PartnerContainer = () => {
    return ( 
        <div>
                <div className="text-white text-center " style={{ marginTop: "15vh" }}>
      <h4 className=" text-3xl md:text-5xl font-medium">
      Our Partners
      </h4>

      <h6 className="text-xl fontT font-extralight my-6">
      Creating a Synergy with global brands
      </h6>
      </div>

      <div className="py-8 flex flex-row justify-center ">
          <img src={partnerImage} alt="" />
        </div>
        </div>
    )
}



export default PartnerContainer