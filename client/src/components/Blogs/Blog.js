import "./blog.css";
import Navbar from "../Navbar/navbar";
import BlogComponent from "../BlogComponent/BlogComponent";
import useFetch from "../../hooks/useFetch";
export default function Blog() {
  const url = "http://localhost:8080/api/blogs";
  const { data, loading } = useFetch(url);
  return (
    <div className="blog-div">
      <Navbar />
      <h1 className="team-title">
        <span>Our</span> Blogs
      </h1>
      <div className="blog-component">
        {loading
          ? "Loading please wait"
          : data.map((item) => (
              <BlogComponent
                topic={item.topic}
                image={item.image}
                desc={item.description}
                key={item.blogId}
              />
            ))}
      </div>
    </div>
  );
}
