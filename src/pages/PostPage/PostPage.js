import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import "./PostPage.css";
import { useLocation } from "react-router-dom";

const PostPage = () => {

  const {state:{item}} = useLocation();

  console.log(item);

  return (
    <MainTemplate>
       <h2>Post Page</h2>
    </MainTemplate>
  );
};

export default PostPage;
