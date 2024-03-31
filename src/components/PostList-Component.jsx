import { useContext } from "react";
import PostLayoutComponent from "./PostLayout-Component";
import { PostListContext } from "../store/post-list-store";

const PostListComponent = () => {
  const objPostListContext = useContext(PostListContext);
  const postList = objPostListContext.postList;
  return (
    <>
       
        <div className="post-container">
          {postList.map((post) => (
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
