import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header-Component";
import FooterComponent from "./components/Footer-Component";
import SideBarComponent from "./components/SideBar-Component";
import CreatePostComponent from "./components/CreatePost-Component";
import PostLayoutComponent from "./components/PostLayout-Component";
import PostListComponent from "./components/PostList-Component";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const tabList ={
    Home:"Home",
    CreatePost:"Create Post"
  }
 const [selectedTab,setSelectedTab] = useState(tabList.Home);
 const selectedTabEvent =(selectedTab)=>{
  setSelectedTab(selectedTab);
 }
  return (
    <div className="app-container">
      <SideBarComponent selectedTab={selectedTab} selectedTabEvent={selectedTabEvent}></SideBarComponent>
      <div className="content">
        <HeaderComponent></HeaderComponent>   
        <PostListProvider>    
        <Outlet/>
        </PostListProvider>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}

export default App;
