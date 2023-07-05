import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import './HomePage.css';

const HomePage = () => {
  return (
    <MainTemplate>
      <div>HomePage</div>

      <div className="home-content">
        <div className="left">
           <Post/>
           <Post/>
           <Post/>
        </div>
        <div className="right">
            <About/>
        </div>

      </div>
      
    </MainTemplate>
  );
};

export default HomePage;
