import "./team.css";
import Navbar from "../Navbar/navbar";
import FourthYear from "./FourthYear";
import ThirdYear from "./ThirdYear";
import SecondYear from "./SecondYear";
const Team = () => {
  return (
    <div className="all-members">
      <Navbar />
      <h1 className="team-title">
        <span>Our</span> Team
      </h1>
      <div className="fourth-year-members ">
        <h1 className="year-title">Fourth Year</h1>
        <FourthYear />
      </div>

      <div className="third-year-members">
        <h1 className="year-title">Third Year</h1>
        <ThirdYear />
      </div>
      <div className="second-year-members">
        <h1 className="year-title">Second Year</h1>
        <SecondYear />
      </div>
    </div>
  );
};

export default Team;
