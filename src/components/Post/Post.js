import React from "react";
import "./Post.css"
import { useNavigate } from "react-router-dom";

const Post = ({item}) => {

  const navigate = useNavigate();
 console.log(item)

  const slug = item.title.replaceAll(" ", "-").toLowerCase();

  const handleNavigate = () => {
     navigate(`/blog/${slug}`, {state:{item}})
  }

  return (
    <div className="post">
      <img
        src={`https://picsum.photos/id/${item.image}/400/600`}
        alt=""
      />
      <div className="text">
        <h2>{item.title}</h2>
        <h6>{item.author.toUpperCase()} {item.date.toUpperCase()}</h6>
        <p>
          {item.short}
        </p>
        <button onClick={handleNavigate}>Więcej</button>
      </div>
    </div>
  );
};

export default Post;
