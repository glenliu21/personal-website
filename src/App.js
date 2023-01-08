import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Philosophy from "./pages/philosophy";
import Projects from "./pages/projects";
import BlogPosts from "./components/BlogComponents/PreviewComponents/Posts";
import Introduction from "./components/BlogComponents/PostPages/Introduction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog' element={<Blog />}>
          <Route index element={<BlogPosts />} />
          {/* Blog post pages */}
          <Route path="Introduction" element={<Introduction />} />
        </Route>
        <Route path='philosophy' element={<Philosophy />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
