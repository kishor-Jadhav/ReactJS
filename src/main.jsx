import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePostComponent from "./components/CreatePost-Component.jsx";
import PostListComponent from "./components/PostList-Component.jsx";
import { postLoader } from "./store/Api-Loader.jsx";
import CreatePostActionComponent, { createPostAction } from "./components/CreatePost-Action-Component.jsx";
import ReduxDemoComponent from "./components/Redux-Example/ReduxDemo-component.jsx";
import { Provider } from "react-redux";
import couterStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostListComponent />,loader:postLoader },
      { path: "/create-post", element: <CreatePostComponent /> },
      { path: "/redux-example", element: <ReduxDemoComponent /> },
      { path: "/create-action-post", element: <CreatePostActionComponent /> ,action:createPostAction},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={couterStore}>   
   <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
