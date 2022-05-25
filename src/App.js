import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<UserDetail />} />
      <Route path="/post/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
