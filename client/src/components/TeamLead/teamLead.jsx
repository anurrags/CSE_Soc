import "./teamLead.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

function TeamLead() {
  return (
    <div id="teamLead">
      <h1 className="lead-title">Team Leads</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member member-first">
          <img
            width={200}
            height={200}
            src="https://i.pinimg.com/originals/ac/c0/b4/acc0b46e0eb4910ab49d6b24b3886a49.jpg"
          />
          <div className="description">
            <h1>John Snow</h1>
            <h2>President</h2>

            <div className="social-media">
              <a href="https://www.google.com" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="member member-second">
          <img
            width={200}
            height={200}
            src="https://helios-i.mashable.com/imagery/articles/04ZQqCk2uQ9bnfChGJ1su7b/hero-image.fill.size_1248x702.v1623365036.jpg"
          />
          <div className="description">
            <h1>Davos Seaworth</h1>
            <h2>Secretary</h2>

            <div className="social-media">
              <a href="https://www.google.com" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="member member-third">
          <img
            width={200}
            height={200}
            src="https://static.toiimg.com/photo/62981209.cms"
          />
          <div className="description">
            <h1>Tyrion Lannister</h1>
            <h2>Treasurer</h2>

            <div className="social-media">
              <a href="https://www.google.com" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <LinkedInIcon />
              </a>
              <a href="https://www.google.com" target="_blank">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamLead;
