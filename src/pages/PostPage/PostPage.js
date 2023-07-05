import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import './PostPage.css'

const PostPage = () => {
  return (
    <MainTemplate>
         <div className="post">
      <img src="https://cdn.pixabay.com/photo/2023/06/28/12/43/flower-8094368_1280.jpg" alt="" />
      <div className="text">
      <h2>Sportowe podsumowanie 2022 – kto jest najlepszym sportowcem?</h2>
      <h6>KUBA 22 STYCZNIA, 2023</h6>
      <p>Ranking to wyjątkowa rzecz. Warto poznać go i zainteresować się kto jest najlepszym sportowcem. W 2022 roku co najmniej kilku sportowców było bardzo ważnych....</p>
      <button>Więcej</button>
      </div>
    </div>
    </MainTemplate>
  );
};

export default PostPage;
