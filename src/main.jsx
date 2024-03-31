import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePostComponent from "./components/CreatePost-Component.jsx";
import PostListComponent from "./components/PostList-Component.jsx";
import { postLoader } from "./store/Api-Loader.jsx";
import CreatePostActionComponent, { createPostAction } from "./components/CreatePost-Action-Component.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListComponent />,loader:postLoader },
      { path: "/create-post", element: <CreatePostComponent /> },
      { path: "/create-action-post", element: <CreatePostActionComponent /> ,action:createPostAction},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
