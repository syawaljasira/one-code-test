import React, { Fragment, useState } from "react";
import "../style/PostDetail.scss";
import { BsArrowLeft, BsChat } from "react-icons/bs";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { default as api } from "../store/apiSlice";

const PostDetail = () => {
  const { postId } = useParams();
  const { data: post } = api.useGetPostDetailQuery(postId);
  const { data: comment } = api.useGetPostsCommentQuery(postId);
  const { data: user } = api.useGetUserDetailQuery(
    typeof post !== "undefined" ? post.userId : 1
  );
  const [showComments, setShowComments] = useState(false);

  const handleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Layout>
      <main className="postDetail">
        <div className="w-5/12 flex flex-col gap-4 mx-auto py-6">
          <Link to="/">
            <BsArrowLeft className="w-2/12 justify-center text-3xl cursor-pointer text-gray-700 hover:text-gray-900" />
          </Link>
          {typeof post !== "undefined" &&
          typeof comment !== "undefined" &&
          user !== null ? (
            <Fragment>
              <h1 className="w-9/12 ml-auto text-lg text-gray-400 font-semibold">
                {typeof post.title !== "undefined" ? post.title : ""}
              </h1>
              <div className="w-full flex flex-row justify-between">
                <h3 className="w-2/12 text-lg font-semibold text-center">
                  {user.username}
                </h3>
                <div className="w-9/12 flex flex-col gap-4">
                  <p className="text-lg text-gray-400">
                    {typeof post.body !== "undefined" ? post.body : ""}
                  </p>
                  {!showComments ? (
                    <div className="flex flex-row items-center gap-3">
                      <BsChat
                        onClick={handleComments}
                        className="text-lg text-blue-400 cursor-pointer"
                      />
                      <span
                        onClick={handleComments}
                        className="text-lg text-blue-400 cursor-pointer"
                      >
                        {comment.length}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <span className="w-full text-lg font-semibold text-gray-500">
                        All Comment
                      </span>
                      <div className="w-full flex flex-col gap-3">
                        {comment.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="w-full flex flex-row gap-5"
                            >
                              <h6 className="w-3/12 text-ellipsis overflow-x-hidden text-lg text-black font-bold">
                                {item.email}
                              </h6>
                              <p className="w-9/12 text-lg text-gray-400">
                                {item.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Fragment>
          ) : null}
        </div>
      </main>
    </Layout>
  );
};

export default PostDetail;
