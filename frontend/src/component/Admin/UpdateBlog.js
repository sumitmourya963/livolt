import React, { Fragment, useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar.js";
import { Editor } from "@tinymce/tinymce-react";
import MetaData from "../layout/MetaData";
import "./WriteBlogPost.css";
import { getBlogDetails, updateBlog } from "../../actions/blogAction.js";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors } from "../../actions/productAction.js";
import { UPDATE_BLOG_RESET } from "../../constants/blogConstant.js";

export default function UpdateBlog() {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const params = useParams();

  const blogId = params.id;

  const { blog, error } = useSelector((state) => state.blogDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.blog);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [blogData, setBlogData] = useState("");

  useEffect(() => {
    if (blog && blog._id !== blogId) {
      dispatch(getBlogDetails(blogId));
    } else {
      setAuthor(blog.author);
      setTitle(blog.title);
      setDescription(blog.description);
      setDate(blog.date);
      setReadTime(blog.readTime);
      setOldImages(blog.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Blog Updated Successfully");
      navigate("/admin/blogs");
      dispatch({ type: UPDATE_BLOG_RESET });
    }
  }, [dispatch, alert, error, isUpdated, blogId, blog, updateError, navigate]);

  const log = () => {
    if (editorRef.current) {
      setBlogData(editorRef.current.getContent());
    }
  };

  const createBlogSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.maxFileSize = 100 * 1024 * 1024;

    myForm.set("author", author);
    myForm.set("title", title);
    myForm.set("description", description);
    myForm.set("date", date);
    myForm.set("readTime", readTime);
    myForm.set("blogData", blogData);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(updateBlog(blogId, myForm));
  };

  const createBlogImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Update User" />
      <div className="dashboard">
        <Sidebar />
        <div>
          <form
            className="create-blog-form"
            encType="multipart/form-data"
            onSubmit={createBlogSubmitHandler}
          >
            <h1>Update Blog Content</h1>
            <div className="main-container">
              <div className="sub-container">
                <input
                  className="blog-author-name"
                  type="text"
                  name="Author"
                  placeholder="Author Name"
                  value={author}
                  required
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                  className="blog-title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="blog-description"
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />

                <input
                  className="blog-date"
                  type="text"
                  name="date"
                  placeholder="Date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  className="read-Time"
                  type="text"
                  name="Read Time"
                  placeholder="Read Time"
                  required
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                />
              </div>
              <div>
                <div className="preview-container">
                  {oldImages &&
                    oldImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt="Old Product Preview"
                      />
                    ))}
                </div>
                <div className="preview-container">
                  {imagesPreview.map((image, index) => (
                    <img
                      className="preview-image"
                      key={index}
                      src={image}
                      alt="Product Preview"
                    />
                  ))}
                </div>
                <input
                  className="blog-image"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createBlogImagesChange}
                  multiple
                />
              </div>
            </div>

            <Editor
              apiKey="5nerwihjaduno7mft3c0m1c5qypopo8txx9brzlryk350z0k"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={blog.blogData}
              init={{
                height: 900,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />

            <button
              id="create-blog-btn"
              type="submit"
              onClick={log}
              disabled={loading ? true : false}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
