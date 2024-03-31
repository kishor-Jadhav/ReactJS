import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});
const PostListreducer =(currentState,action)=>{
let currentPostList = currentState;
if(action.type=='DELETE'){
 const index = currentPostList.findIndex(obj=>obj.id==action.payload.id);
 currentPostList = index!= -1? currentState.splice(index,1): currentState;
} else
if(action.type=='ADD'){
    const id = currentPostList.length+1;
    const post =  action.payload.post;
    post.id = id;
    currentPostList =[post,...currentState];
   }
return currentPostList;
}
const PostListProvider =({children})=>{
    const [postList,dispatchPostList]=useReducer(PostListreducer,DEFAULT_POST);
    const addPost =(post)=>{
        const addAction ={
            type:'ADD',
            payload:{post:post}
        }
        dispatchPostList(addAction);
    }
    const deletePost =(id)=>{
        const deleteAction ={
            type:'DELETE',
            payload:{id:id}
        }
        dispatchPostList(deleteAction);
        console.log(id)
    }
    return (
        <PostListContext.Provider value={{postList:postList,
            addPost:addPost,
            deletePost:deletePost,
            }}>
        {children}
        </PostListContext.Provider>
        )
}
const DEFAULT_POST=[{
    id:'1',
    Title:'nis rigire lregre ',
    link:'abkaj aarghrga rha8',
    description:'shuri rdgourhg irgheoareyrh rguagehganrgyahrg araora',
    tags:['fes','vfs','we'],
    reactions:15
},
{
    id:'2',
    Title:'nis krjgrdi rigire lregre ',
    link:'abkaj hihaarghrga rha8',
    description:'shuri rdgourhg irgheoareyrh rguagehganrgyahrg araora',
    tags:['ggg','rwf','bswr'],
    reactions:2
},
{
    id:'3',
    Title:'segsgsrgimr rigire lregre ',
    link:'abkaj asrgjir arghrga rha8',
    description:'54sojgos j ojrgork urhg irgheoareyrh rguagehganrgyahrg araora',
    tags:['Sangli','Mumbai','Pune'],
    reactions:20
}]
export default PostListProvider;