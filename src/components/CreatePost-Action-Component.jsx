import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";

const CreatePostActionComponent = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
 
  return (
    <div className="create-post">
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <b>Title</b>
          </label>
          <input type="input" name="title" className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <b>Description</b>
          </label>
          <textarea
            type="text"
            name="description"
            rows="4"
            cols="50"
            className="form-control"
            id="description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            <b>Reactions</b>
          </label>
          <input
            type="input"
            name="reaction"
            className="form-control"
            id="reaction"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            <b>Tags</b>
          </label>
          <input type="input" name="tags" className="form-control" id="tags" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};
export  async function createPostAction(data){
    const formData =await data.request.formData();
    const postData =Object.fromEntries(formData);
    console.log(postData)
    fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 9,
          title: postData.title,
          link: "",
          body: postData.description,
          tags: postData.tags.split(","),
          reactions: postData.reaction,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          addPost(data);
         
        }); 
        return redirect("/")
}
export default CreatePostActionComponent;
