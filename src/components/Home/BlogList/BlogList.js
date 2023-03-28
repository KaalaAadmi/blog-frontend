import React from "react";
import "./BlogList.css";
import BlogItem from "./BlogItem/BlogItem";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <Link
          to={`/blog/${blog._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BlogItem blog={blog} key={blog._id} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
