import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import Post from "../../components/Post/Post";
import About from "../../components/About/About";
import './HomePage.css';
import { posts } from "../../db";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  return (
    <MainTemplate>
      <Banner/>

      <hr/>

      <div className="home-content">
        <div className="left">
            {posts.map(post => <Post key={post.id} item={post}/>)}
        </div>
        <div className="right">
            <About/>
        </div>

      </div>
      
    </MainTemplate>
  );
};

export default HomePage;
