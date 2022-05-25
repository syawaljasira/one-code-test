import React from "react";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";
import { default as api } from "../store/apiSlice";

const PostCard = (props) => {
  const { data: user } = api.useGetUserDetailQuery(props.userId);
  const { data: comments } = api.useGetPostsCommentQuery(props.id);

  return (
    <div key={props.id + props.title} className="w-full flex flex-row p-2">
      <h6 className="w-4/12 text-xl m-0 font-semibold text-ellipsis overflow-x-hidden">
        {user !== undefined ? user.username : ""}
      </h6>
      <div className="w-8/12 flex flex-col gap-3">
        <p className="text-gray-400 text-base">
          {props.title ? props.title : ""}
        </p>
        <div className="flex flex-row gap-10">
          <span className="flex flex-row items-center gap-3">
            <BsChat className="text-lg text-blue-400" />
            <span className="text-base text-blue-400">
              {comments !== undefined ? comments.length : ""}
            </span>
          </span>
          <Link to={props.link ? props.link : "/"}>
            <span className="border-none m-0 p-0 text-blue-400 text-base font-bold">
              Detail
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
