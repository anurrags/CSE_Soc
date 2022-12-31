import "./alumni.css";
import TeamMembers from "../TeamMembers/teamMembers";
import Navbar from "../Navbar/navbar";
import useFetch from "../../hooks/useFetch";
const Alumni = () => {
  const url = "http://localhost:8080/api/team/alumni/2022";
  const { data, loading } = useFetch(url);
  return (
    <div className="all-members">
      <Navbar />
      <h1 className="team-title">
        <span>Our</span> Alumni
      </h1>
      <div className="year-members">
        {loading
          ? "Loading Please wait"
          : data.map((item) => (
              <TeamMembers
                image={item.image}
                name={item.name}
                designation={item.designation}
                linkedin={item.linkedin}
                instagram={item.insta}
                twitter={item.twitter}
                key={item.rollNo}
              />
            ))}
      </div>
    </div>
  );
};

export default Alumni;
