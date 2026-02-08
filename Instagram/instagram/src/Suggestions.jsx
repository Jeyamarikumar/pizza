import React, { useEffect, useState } from 'react'

function Suggestions() {

  const[profile,setProfile] = useState(null);
  const[suggestions,setSuggestions] = useState([]);

  useEffect(()=>{

    setTimeout(()=>{

    fetch('http://localhost:3000/profile').
    then( data => data.json()).
    then( data => setProfile(data)).catch(err => console.log(err));

    fetch('http://localhost:3000/suggestions').
    then( data => data.json()).
    then( data => setSuggestions(data)).catch(err => console.log(err));

    },2000)

  },[])

  return (
    <div>
      <div className='suggestions w-75 m-4'>
      {profile ? 
      <div className='d-flex'>
        <img className='dp rounded-circle mx-4' src={profile.profile_pic} alt="Profile pic" />
        <h5 className=' my-2 '>{profile.username}</h5>
        <p className='ms-auto text-primary mx-5 my-2 fs-6'>Switch</p>
      </div> : <p>Loading...</p> }

      <div className='d-flex mx-4'>
        <p className='my-5 fs-5'>Suggested for you</p>
        <h5 className='ms-auto my-auto'>See All</h5>
      </div>

       {suggestions.length > 0  ?( 
        <div className='user'>{suggestions.map((suggestion)=>(
            <div  className='my-4 mx-4 ' key={suggestion.id}>
                <div className='d-flex'>
                    <img className='dp rounded-circle' src={suggestion.profile_pic} alt="Profile pic" />
                    <h5 className='my-2 mx-1'>{suggestion.username}</h5>
                    <h5 className='text-primary ms-auto my-2'>Follow</h5>
                </div>
               
                </div>
        ))}</div>)
      : (
        <div >
          <img className='load m-4 my-5 mx-4' src='/src/assets/newLogo.png' alt="" />
          <h4 className='text-align-center'>Loading......</h4></div>)
      }
      
      </div>
    </div>
  )
}

export default Suggestions
