import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import "./PostPage.css";
import { useLocation } from "react-router-dom";

const PostPage = () => {
  const {state:{item}} = useLocation();

  console.log(item);

  return (
    <MainTemplate>
      <div className="post-name">
       <h1>{item.title} <br /></h1>
       <h5>{item.date} <br />
       {item.author} <br /></h5>
       </div>
       <div className="postpage">
       <img src={`https://picsum.photos/id/${item.image}/400/600`} alt=""/>
       <p>{item.content}</p>
       </div>
       
    </MainTemplate>
  );
};

export default PostPage;
