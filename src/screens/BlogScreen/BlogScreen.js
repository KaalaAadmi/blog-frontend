import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./BlogScreen.css";
import EmptyList from "./../../components/common/EmptyList/EmptyList";
import Chip from "./../../components/common/Chip/Chip";
// import { blogList } from "./../../config/data";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { format,parseISO } from "date-fns";

const BlogScreen = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(`/blog/find/${id}`);
      setBlog(res.data);
    };
    getBlog();
  }, [id]);

  return (
    <div>
      <Link
        to="/"
        className="blog-goBack"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          // /* justify-content: center; */ fontSize: "25px",
        }}
      >
        <span>
          <FaArrowLeft />
        </span>{" "}
        <div style={{ marginLeft: "10px" }}>Go Back</div>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">
              Published {format(parseISO(blog.createdAt), "dd MMM, yyyy")}
            </p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <div className="blog-description" style={{ marginBottom: "1.5rem" }}>
            {blog.description}
          </div>
          {blog.sections.map((section, index) => {
            if (section.sectionType === "title") {
              return (
                <h1 className="blogSection-title" key={section._id}>
                  {section.sectionText}
                </h1>
              );
            } else if (section.sectionType === "image") {
              return (
                <img
                  key={section._id}
                  src={section.sectionText}
                  alt={section.sectionCaption}
                />
              );
            } else if (section.sectionType === "text") {
              return (
                <p className="blog-description-text" key={section._id}>
                  {section.sectionText}
                </p>
              );
            } else if (section.sectionType === "link") {
              return (
                <h3>
                  <a
                    className="blogSection-link"
                    target="_blank"
                    rel="noreferrer"
                    href={section.sectionLink}
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                    }}
                  >
                    <FaAngleRight />
                    <FaAngleRight />
                    {section.sectionText}
                    <FaAngleLeft />
                    <FaAngleLeft />
                  </a>
                </h3>
              );
            }
          })}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default BlogScreen;
