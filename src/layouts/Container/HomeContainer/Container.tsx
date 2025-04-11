// import React from "react";
import TButton from "../../../components/TButton/TButton";
import "./Container.css"
import Button from "../../../components/CButton/Button";

const Container = () => {
    return ( 
 
        <div className="text-center mx-auto" style={{marginTop: "10vh"}}>
            <TButton text="Welcome to KeySystem" className="border border-gray-200 py-2 text-sm px-6 buttonStyle"/>


            <div className="text-white text-6xl  mt-5 font-bold  Ifont" >
                IT Consulting for <br />
                Forward-thinking <br />
                Businessess
            </div>
            <div className="font-extralight text-2xl textP text-white " style={{marginTop: "3vh"}}> Driving Digital Transformation, One Solution at a Time</div>


            <div className="flex justify-center gap-8" style={{marginTop:"8vh"}}>
        
                <Button className="b-radius " text="Get Started" />

             
                <TButton text="Learn More" className="border border-blue-400 py-2  text-xl px-6 b-radius"/>
            </div>
        </div>
   
    )
}



export default Container