import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postSlice";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts && posts?.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
    </article>
  ));
  return (
    <section>
        <h2>Posts</h2>
        ssadasd
       <>{renderPosts}</> 
    </section>
  )
};

export default PostLists;
