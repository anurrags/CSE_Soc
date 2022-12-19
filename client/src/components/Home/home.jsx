import "./home.css";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
const Home = () => {
  const url = "http://localhost:8080/api/event";
  const { data, loading } = useFetch(url);
  console.log(data);
  return (
    <div className="main_container">
      <div className="container">
        <Navbar />

        <div className="topDiv">
          <h2>
            <u> Our Events</u>
          </h2>
        </div>
        <div className="events">
          {loading
            ? "Loading please wait"
            : data.map((item) => (
                <div className="card">
                  <img
                    src={
                      data.image
                        ? data.image
                        : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                    }
                    alt="Event"
                  />
                  <div className="content">
                    <h3 className="event-name">{item.name}</h3>
                    <p className="event-details">{item.description}</p>
                    <Link className="event-link" to="/eventRegistration">
                      Register
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
