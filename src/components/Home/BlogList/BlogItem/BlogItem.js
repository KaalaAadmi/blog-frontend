import React from "react";
import "./BlogItem.css";
import Chip from "./../../../common/Chip/Chip";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { format, parseISO } from "date-fns";

const BlogItem = ({
  blog: {
    _id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}) => (
  <div className="blogItem-wrap">
    {/* <Link clasName="blogItem-link-card" to={`/blog/${id}`}> */}
    <img src={cover} alt="cover" className="blogItem-cover" />
    <Chip label={category} />
    <h3>{title}</h3>
    <p className="blogItem-desc">{description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avatar" />
        <div>
          <h6>{authorName}</h6>
          <p>{format(parseISO(createdAt), "dd MMM, yyyy")}</p>
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${_id}`}>
        <FaArrowRight />
      </Link>
    </footer>
    {/* </Link> */}
  </div>
);

export default BlogItem;
