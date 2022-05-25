import React, { Fragment, useEffect, useState } from "react";
import "../style/Posts.scss";
import { FiSearch } from "react-icons/fi";
import PostCard from "./PostCard";

const Posts = (props) => {
  let pageLimit = 5;
  let dataLimit = 4;
  const [pages] = useState(Math.round(props.posts.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return props.posts.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <div id="posts" className="w-5/12 mx-auto py-6">
      <div className="w-full flex flex-row items-center justify-center gap-3 bg-blue-50 rounded-full">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search"
          className="w-10/12 text-base p-2 text-center bg-transparent rounded-full transition-all duration-300 ease-in-out outline-blue-50 focus:outline-blue-300 active:outline-blue-300"
        />
        <FiSearch className="text-2xl justify-end cursor-pointer text-gray-700 hover:text-gray-900" />
      </div>
      <div className="w-full flex flex-col gap-5 py-6">
        {getPaginatedData() !== undefined &&
          getPaginatedData().map((post) => {
            return (
              <Fragment key={post.id + post.title}>
                <PostCard
                  id={post.id}
                  userId={post.userId}
                  title={post.title}
                  link={`/post/${post.id}`}
                />
              </Fragment>
            );
          })}
      </div>
      <div
        id="pagination"
        className="w-full flex flex-row justify-center gap-5 text-base text-gray-500"
      >
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        <div className="flex flex-row gap-2 py-4">
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`px-2 ${
                currentPage === item
                  ? "border-b-2 border-b-blue-400 pointer-events-none p-1"
                  : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Posts;
