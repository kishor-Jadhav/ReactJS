export const postLoader = () => {
    return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {     
      return data.posts;
    });
  
  };