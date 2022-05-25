import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { default as api } from "../store/apiSlice";
import { login } from "../store/reducer";
import Button from "../components/Button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data } = api.useGetUsersQuery();

  const handleLogin = (e) => {
    e.preventDefault();

    let user = [];
    user = data.filter(
      (item) => item.username === username && item.username === password
    );

    if (user.length !== 0) {
      dispatch(login(user[0]));
      navigate("/");
    } else {
      alert(
        "Username atau password yang anda masukkan salah! mohon periksa kembali"
      );
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <main className="w-3/12 flex flex-col justify-center p-3 shadow-sm shadow-slate-300">
        <h5 className="pb-10 text-lg font-bold text-center">Login Page</h5>
        <form onSubmit={handleLogin} className="flex flex-col gap-10">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full text-center border border-blue-400 rounded-full p-3"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full text-center border border-blue-400 rounded-full p-3"
          />
          <Button type="submit" className="w-full py-3">
            Login
          </Button>
        </form>
      </main>
    </div>
  );
};

export default Login;
