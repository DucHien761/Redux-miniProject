import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postSlice";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);
  const renderPosts =
    
    posts?.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    ));
  return (
    <main>
      {" "}
      <h2>Posts</h2>
      ssadasd
      <>{renderPosts}</>{" "}
    </main>
  );
};

export default PostLists;
