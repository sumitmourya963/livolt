import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <div className="blogs-main-container">
        <div className="blog-info-container">
          <p className="author-name">
            <span>Blogger : </span>
            {blog.author}
          </p>
          <h1 className="title">{blog.title}</h1>
          <p className="description">{blog.description}</p>
          <div>
            <p className="date">{blog.date}</p>
            <p className="read-time">{blog.readTime} read</p>
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={blog.images[0].url} alt={blog.title} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
