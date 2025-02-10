import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import { Routes, Route } from "react-router-dom"
import Blog from "./Components/Blog/Blog";
import resumeData from "./constant/resumeData.json"
import HomeBanner from "./Components/HomeBanner/HomeBanner"
import CallToAction from "./Components/CallToAction/CallToAction"
import Project from "./Components/Project/Project"
import { configData } from "./constant/configData"

const App = () => {
  const Main = () => {
    return (
      <>
        <About about={configData?.aboutMe} />
        <Resume techSkills={configData?.techSkills} />
        <Project projectList={configData?.projects?.projectList}/>
        <CallToAction btnList={configData?.callToAction?.btnList} />
        <Footer footer={configData?.footer} />
      </>
    )
  }

  return (
    <div className="App">
      <Header header={configData} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tech-blog" element={<Blog />} />
      </Routes>
    </div>
  );
}


export default App;
