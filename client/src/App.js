import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import Event from "./components/Event/event";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Register from "./components/EventRegister/register";
import Blog from "./components/Blogs/Blog";
import Team from "./components/Team/Team";
import Alumni from "./components/Alumni/Alumni";
function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" exact element={<Event />} />
      <Route path="/blogs" exact element={<Blog />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/eventRegistration" exact element={<Register />} />
      <Route path="/team" exact element={<Team />} />
      <Route path="/alumni" exact element={<Alumni />} />
    </Routes>
  );
}

export default App;
