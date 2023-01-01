import "./home.css";
import Navbar from "../Navbar/navbar";
import Carousel from "../Carousel/carousel";
import TeamLead from "../TeamLead/teamLead";
import ContactForm from "../ContactForm/contactForm";
import Youtube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Email from "@mui/icons-material/Email";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main_container-home">
        <Carousel />
        <div className="container-home">
          <div className="home-about-us">
            <div className="about-us first-about-us">
              <h1 className="home-about-title home-about-title-first">
                WHO <span className="highlight">WE</span> ARE
              </h1>
              <p className="home-about-para first-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                sit saepe eos suscipit minima, consectetur obcaecati magni nihil
                impedit distinctio ut hic praesentium asperiores ullam velit
                labore voluptatum rem voluptatibus repellendus a eligendi
                consequatur. Inventore nisi similique odit cumque doloremque?
                Commodi praesentium, neque vitae harum eos quia et eius
                recusandae.s
              </p>
            </div>
            <div className="about-us second-about-us">
              <p className="home-about-para second-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                sit saepe eos suscipit minima, consectetur obcaecati magni nihil
                impedit distinctio ut hic praesentium asperiores ullam velit
                labore voluptatum rem voluptatibus repellendus a eligendi
                consequatur. Inventore nisi similique odit cumque doloremque?
                Commodi praesentium, neque vitae harum eos quia et eius
                recusandae.s
              </p>
              <h1 className="home-about-title home-about-title-second">
                <span className="highlight">OUR</span> VISION
              </h1>
            </div>
          </div>
        </div>
        <TeamLead />
        <div className="home-footer">
          <h1 className="contact-form-heading">Contact Us</h1>
          <ContactForm />

          <div className="home-social-media">
            <ul>
              <li>
                <a href="https://google.com" target="_blank">
                  <Youtube className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <Instagram className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <Facebook className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <Twitter className="social-icons" />
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  <Email className="social-icons" />
                </a>
              </li>
            </ul>
          </div>
          <span>© CSE-Society 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
