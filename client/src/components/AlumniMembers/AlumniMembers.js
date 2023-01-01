import "./alumniMembers.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

const teamMembers = (props) => {
  return (
    <div id="alumni_member">
      <div className="divider"></div>
      <div className="member">
        <img src={props.image} />
        <div className="description">
          <h1>{props.name}</h1>
          <h2>{props.designation}</h2>

          <div className="social-media">
            <a href={props.instagram} target="_blank">
              <InstagramIcon />
            </a>
            <a href={props.linkedin} target="_blank">
              <LinkedInIcon />
            </a>
            <a href={props.twitter} target="_blank">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teamMembers;
