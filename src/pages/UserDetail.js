import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const UserDetail = () => {
  const userInfo = useSelector((state) => state.mainReducer.userInfo);

  return (
    <Layout>
      <div style={{ paddingTop: "13vh" }}>
        <div className="w-5/12 flex flex-col gap-4 mx-auto py-6">
          <Link className="w-2/12" to="/">
            <BsArrowLeft className="justify-center text-3xl cursor-pointer text-gray-700 hover:text-gray-900" />
          </Link>
          <div className="w-full flex flex-col gap-5 py-6">
            <div className="w-full flex flex-row justify-end items-center">
              <span className="w-4/12 flex gap-3 text-gray-400">
                Username <span>:</span>
              </span>
              <span className="w-6/12 font-semibold">{userInfo.username}</span>
            </div>
            <div className="w-full flex flex-row justify-end items-center">
              <span className="w-4/12 flex gap-3 text-gray-400">
                Email <span>:</span>
              </span>
              <span className="w-6/12 font-semibold">{userInfo.email}</span>
            </div>
            <div className="w-full flex flex-row justify-end items-center">
              <span className="w-4/12 flex gap-3 text-gray-400">
                Address <span>:</span>
              </span>
              <span className="w-6/12 font-semibold">{`${userInfo.address.street}, ${userInfo.address.city},`}</span>
            </div>
            <div className="w-full flex flex-row justify-end items-center">
              <span className="w-4/12 flex gap-3 text-gray-400">
                Phone <span>:</span>
              </span>
              <span className="w-6/12 font-semibold text-">
                {userInfo.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
