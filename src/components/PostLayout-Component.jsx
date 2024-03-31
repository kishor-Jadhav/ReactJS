import { useContext } from "react";
import { BsXCircle } from "react-icons/bs";
import { PostListContext } from "../store/post-list-store";
const PostLayoutComponent = ({ post }) => {
 const {deletePost}= useContext(PostListContext);
  return (
    <div className="card" style={{ width: "23rem" }}>
      <div className="card-body">
        <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle  bg-danger border border-light rounded-circle">
          <BsXCircle />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="btn-action">
          {post.tags.map((tag) => (
            <span  key={tag} className="badge text-bg-primary card-tags">{tag}</span>
          ))}
        </div>
        <div className="alert alert-success" role="alert">
          Post has reacted by {post.reactions} reactions
        </div>
        
      </div>
    </div>
  );
};
export default PostLayoutComponent;
