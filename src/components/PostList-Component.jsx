import { useContext, useEffect } from "react";
import PostLayoutComponent from "./PostLayout-Component";
import { PostListContext } from "../store/post-list-store";
import EmptyPostlist from "./EmptyPost-Component";

const PostListComponent = () => {
  const objPostListContext = useContext(PostListContext);
  const postList = objPostListContext.postList;
  const loadPost = objPostListContext.loadPost;
  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    handleFetchPost(signal);
    return ()=>{
      console.log("Cleanup component...")
      controller.abort();
       }
  }, []);

  const handleFetchPost = (signal) => {
    fetch("https://dummyjson.com/posts",signal)
    .then((res) => res.json())
    .then((data) => {     
      loadPost(data.posts);
    });
  
  };
  return (
    <>
      <div className="post-container">
        {postList.length == 0 && (
          <EmptyPostlist handleFetchPost={handleFetchPost}></EmptyPostlist>
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
