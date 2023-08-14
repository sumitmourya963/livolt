import React from "react";
import "./AdminBlogs.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import { deleteBlog } from "../../actions/blogAction";
import { useDispatch } from "react-redux";

const AdminBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blogPreview = () => {
    navigate(`/blogs/${blog._id}`);
  };

  const updateBlogHandler = () => {
    navigate(`/admin/update-blog/${blog._id}`);
  };

  const deleteBlogHandler = () => {
    dispatch(deleteBlog(blog._id));
  };

  return (
    <div className="blogs-main-container">
      <div className="blog-info-container">
        <p className="admin-author-name">
          <span>Blogger : {blog.author} </span>

          <div>
            <PreviewIcon onClick={blogPreview} className="preview-icon" />
            <EditIcon onClick={updateBlogHandler} className="edit-icon" />
            <DeleteIcon onClick={deleteBlogHandler} className="delete-icon" />
          </div>
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
  );
};

export default AdminBlogCard;
