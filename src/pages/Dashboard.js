import React from "react";
import "../style/Dashboard.scss";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import Posts from "../components/Posts";
import { default as api } from "../store/apiSlice";

const Dashboard = () => {
  const { isLogin, userInfo } = useSelector((state) => state.mainReducer);
  const { data: posts } = api.useGetPostsQuery();

  return (
    <Layout>
      <main className="dashboard">
        {!isLogin && Object.keys(userInfo).length === 0 ? (
          <img
            className="dashboard__img"
            src="/assets/cinta_coding.png"
            alt="Login Hero"
          />
        ) : (
          <div>{posts !== undefined && <Posts posts={posts} />}</div>
        )}
      </main>
    </Layout>
  );
};

export default Dashboard;
