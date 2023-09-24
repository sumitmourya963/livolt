import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { getBlogDetails } from "../../actions/blogAction";
import { clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";

function BlogDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = params;

  const { blog, error, loading } = useSelector((state) => state.blogDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getBlogDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {blog && blog.images && blog.images[0] && (
            <div className="main-div">
              <Fragment>
                <img
                  className="blogDetails-image"
                  src={blog.images[0].url}
                  alt="blog"
                />
                <hr />
                <h1 className="blogDetails-title">{blog.title}</h1>
                <p className="blogDetails-info">
                  <span className="info-1">{blog.date}</span>
                  <span className="info-2">
                    {blog.readTime}
                    <span className="read"> read</span>{" "}
                  </span>
                  <span className="info-3">
                    <span>Blogger : </span> {blog.author}
                  </span>
                </p>
                <hr />
                <div
                  className="blogDetails-content"
                  dangerouslySetInnerHTML={{ __html: blog.blogData }}
                />
              </Fragment>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default BlogDetails;
