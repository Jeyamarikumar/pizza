import { useEffect, useState, createContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import Login1 from "./Login1";



export const dataContext = createContext();

function Home1(){

    const navigate = useNavigate();


    const[posts,setPosts] = useState(null);
    const data = "DataData";

    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal;


       
        fetch('http://localhost:3000/posts',{signal})
    .then(response => {
        return response.json(); 
    }).then((data)=>{
        setPosts(data);
    }).catch(err => {
        console.log(err);
    })


//Cleanup Function
return()=>{
    console.log('UnMounted');
    controller.abort();
}


},[]);


    return(
        <div className="container ">
           {/*  <Link to='/login' className="text-decoration-none fw-bold fs-1">Login</Link> */}
            
            <dataContext.Provider value={data}>
               {/*   <Login1 /> */}
            </dataContext.Provider>
            
           
            <div className="row justify-content-center m-3 ">

    {posts && posts.map(post => {
        return(
    
        <div key={post.id} className="card mx-3 my-3  "  style={{width: '22rem'}} onClick={()=>{navigate('/post/'+post.id)}} >
 
  <div className="card-body  " >
    <h5 className="card-title fw-bold p-1">{post.title}</h5>
    
    
  </div>
</div> )
})}
    
    </div>
    </div>
   
    );
}

export default Home1