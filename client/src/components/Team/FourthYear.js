import React from "react";
import TeamMembers from "../TeamMembers/teamMembers";
import useFetch from "../../hooks/useFetch";
const SecondYear = () => {
  const url = "http://localhost:8080/api/team/year/2023";
  const { data, loading } = useFetch(url);
  return (
    <div className="year-members">
      {loading
        ? "Loading Please wait"
        : data.map((item) => (
            <TeamMembers
              image={item.image}
              name={item.name}
              designation={item.designation}
              linekdin={item.linekdin}
              instagram={item.instagram}
              twitter={item.twitter}
              key={item.rollNo}
              className="year-member"
            />
          ))}
    </div>
  );
};

export default SecondYear;
