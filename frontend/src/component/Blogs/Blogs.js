import React, { Fragment, useEffect, useState } from "react";
import "./Blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors } from "../../actions/productAction";
import { getAllBlogs } from "../../actions/blogAction";
import BlogCard from "./BlogCard";
import Pagination from "react-js-pagination";
import Loader from "../layout/Loader/Loader";

function Blogs() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const { loading, blogs, blogsCount, resultPerPage, error } = useSelector(
    (state) => state.blogs
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getAllBlogs(currentPage));
  }, [dispatch, error, alert, currentPage]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="main-container">
            {blogs &&
              blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
          </div>
          {resultPerPage && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={blogsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Blogs;
