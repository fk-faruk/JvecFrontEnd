import Navbar from "../Navbar/Navbar";
import Container from "../Container/HomeContainer/Container";
import AContainer from "../Container/AboutUsContainer/Container";
// import FContainer from "../Container/HomeContainer/Container";
import "./Body.css";

const Body = () => {
  return (
    <div className="background">
      <Navbar />
      <div >
        <Container />
        {/* <body className="b"></body> */}
        <AContainer />
      </div>
    </div>
  );
};

export default Body;
