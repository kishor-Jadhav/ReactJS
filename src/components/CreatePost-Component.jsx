import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePostComponent = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
 const title= useRef('');
 const description= useRef('');
 const reaction= useRef('');
 const tags= useRef('');

 const handleSubmit=(event)=>{
  event.preventDefault();
  const subPost=
    {
      
      title: title.current.value,
      link:'',
      body: description.current.value,
      tags:tags.current.value.split(","),
      reactions:reaction.current.value
  }
 // addPost(subPost);
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({    
    userId:9,
    title:title.current.value,
    link:'',
    body:description.current.value,
    tags:tags.current.value.split(","),
    reactions:reaction.current.value
  })
})
.then(res => res.json())
.then(data=>{
  addPost(data);
  navigate("/");
});
 }
  return (
    <div className="create-post">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
           <b>Title</b>
        </label>
        <input type="input" ref={title} className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
           <b>Description</b>
        </label>
        <textarea type="text" ref={description} rows="4" cols="50" className="form-control" id="description"></textarea>
       
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
           <b>Reactions</b>
        </label>
        <input type="input" ref={reaction} className="form-control" id="reaction" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags"  className="form-label">
           <b>Tags</b>
        </label>
        <input type="input" ref={tags} className="form-control" id="tags" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};
export default CreatePostComponent;
