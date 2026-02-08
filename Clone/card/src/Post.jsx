import { useState } from "react";
import { useParams } from "react-router-dom";

function Post(){

    const[post,setPost]= useState(null);

    const {id} = useParams();

    
        fetch('http://localhost:3000/posts/'+id)
    .then(response => {
        return response.json(); 
    }).then((data)=>{
        setPost(data);
    }).catch(err => {
        console.log(err);
    })

    return(
        <div>
           {post && <div className="container m-4">
                
            <h1>Post{id}</h1>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
            </div>}
           
        </div>
    );
}

export default Post;