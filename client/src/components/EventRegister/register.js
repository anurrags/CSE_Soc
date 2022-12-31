import "./register.css";
const register = () => {
  return (
    <div>
      <h1 className="register-heading">Register</h1>
      <div className="form">
        <form
          action="https://formsubmit.co/iamanurag0501@gmail.com"
          method="POST"
        >
          <div className="event-name input-box">
            <label for="event">
              <span className="details">Event Name*</span>
            </label>
            <br />
            <select name="event">
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
              <option value="event3">Event 3</option>
              <option value="event4">Event 4</option>
              <option value="event5">Event 5</option>
            </select>
          </div>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name*</span>
              <input
                type="text"
                placeholder="Enter your name"
                name="firstName"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name*</span>
              <input
                type="text"
                placeholder="Enter your username"
                name="lastName"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email*</span>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number*</span>
              <input
                type="text"
                placeholder="Enter your number"
                name="phone"
                required
              />
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <span className="gender-title">Gender*</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
