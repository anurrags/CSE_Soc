import "./event.css";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const url = "http://localhost:8080/api/event";
  const { data, loading } = useFetch(url);
  const User = localStorage.getItem("token");
  // console.log(data);
  const handleClick = () => {
    if (User) {
      navigate("/eventRegistration");
    } else navigate("/login");
  };
  return (
    <div className="main_container-event">
      <Navbar className="nav" />
      <h1 className="team-title">
        <span>Our</span> Events
      </h1>
      <div className="container-event">
        <div className="topDiv"></div>
        <div className="events">
          {loading
            ? "Loading, Please wait"
            : data.map((item) => (
                <div className="card">
                  <img
                    src={
                      data.image
                        ? data.image
                        : "http://www.tamarindglobal.com/images/events/events.jpg"
                    }
                    alt="Event"
                  />
                  <div className="content">
                    <h3 className="event-name">{item.name}</h3>
                    <p className="event-details">{item.description}</p>
                    <button className="event-link" onClick={handleClick}>
                      Register
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
