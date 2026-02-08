import React, { useEffect, useState } from 'react'

function Posts() {

    const[posts,setPosts] = useState([]); 

    useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:3000/posts').
        then((data)=>data.json()).
        then((data)=>setPosts(data)).
        catch(err=>{
            console.log(err)
        })},2000)
    },[]);

  return (
    <div className='d-flex justify-content-center'>
      {posts.length > 0  ?( 
        <div>{posts.map((post)=>(
            <div className='my-5' key={post.id}>
                <div className='d-flex'>
                    <img className='dp rounded-circle' src={post.user.profile_pic} alt="Profile pic" />
                    <h5 className='my-2 mx-1'>{post.user.username}</h5>
                </div>
                <img className='image' src={post.image} alt="" />
                <div><i className="bi bi-heart "></i>
                <i className="bi bi-chat ms-2"></i>
                <i className="bi bi-send ms-2"></i></div>
                <div>
                    <b>{post.likes}Likes</b>
                </div>
                <div>
                    {post.caption}
                </div>
            </div>
        ))}</div>)
      : (
        <div >
          <img className='load m-4 my-5 mx-4' src='/src/assets/newLogo.png' alt="" />
          <h4 className='text-align-center'>Loading Posts......</h4></div>)
      }
      
      </div>
  )
}

export default Posts
