import { useContext, useEffect } from "react";
import PostLayoutComponent from "./PostLayout-Component";
import { PostListContext } from "../store/post-list-store";
import EmptyPostlist from "./EmptyPost-Component";
import { useLoaderData } from "react-router-dom";

const PostListComponent = () => {
  const objPostListContext = useContext(PostListContext);
  const postList = objPostListContext.postList;
  const loadPost = objPostListContext.loadPost;
  const loaderPost = useLoaderData();
  loadPost(loaderPost);
  return (
    <>
      <div className="post-container">
        {postList.length == 0 && (
          <EmptyPostlist ></EmptyPostlist>
        )}
        {postList.length > 0 &&
          postList.map((post) => (
            <PostLayoutComponent
              key={post.id}
              post={post}
            ></PostLayoutComponent>
          ))}
      </div>
    </>
  );
};
export default PostListComponent;
