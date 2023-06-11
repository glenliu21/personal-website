import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Philosophy from "./pages/philosophy";
import Projects from "./pages/projects";
import Posts from "./components/BlogComponents/PreviewComponents/Posts";
import MetaphysicalInvestigationSin from "./components/BlogComponents/PostPages/MetaphysicalInvestigationSin";
// import UtilityMonster from "./components/BlogComponents/PostPages/UtilityMonster";
import Introduction from "./components/BlogComponents/PostPages/Introduction";
import JobJustice from "./components/BlogComponents/PostPages/JobJustice";
import ClassicalMusic from "./components/BlogComponents/PostPages/ClassicalMusic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='blog' element={<Blog />}>
          <Route index element={<Posts />} />
          {/* Blog post pages */}
          <Route path="Introduction" element={<Introduction />} />
          <Route path="MetaphysicalInvestigationSin" element={<MetaphysicalInvestigationSin />} /> 
          <Route path="JobJustice" element={<JobJustice />} />
          <Route path="ClassicalMusic" element={<ClassicalMusic />} />
          {/* <Route path="UtilityMonster" element={<UtilityMonster />} />  */}
        </Route>
        <Route path='philosophy' element={<Philosophy />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
