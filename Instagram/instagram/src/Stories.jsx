import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {


  const[stories,setStories] = useState([]);

  const navigate = useNavigate();

  let tot = 0;

  useEffect(()=>{
    fetch('http://localhost:3000/story').
    then(data => data.json()).
    then(data => setStories(data)).
    catch(err => console.log(err));
  },[]);

  return (
    <div className='story d-flex'>
      <div className='d-none'>
        {tot=stories.length}
      </div>
      {stories.length > 0 ? (
        stories.map((story)=>(
          <div key={story.id} onClick={()=> {navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-border mx-2'>
            <img className='story-dp rounded-circle ' src={story.user.profile_pic} alt="dp" />
            </div>
            <h6 className='text-truncate mx-3' style={{width:"50px"}}>{story.user.username}</h6>
          </div>
        ))
      ) : 
      (
        <p>Loading</p>
      ) }
    </div>
  )
}

export default Stories
