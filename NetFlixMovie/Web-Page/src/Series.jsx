import React from 'react'
import { useState, useEffect } from 'react';
import './series.css'


function Series() {
  const [netflix_series_2025, setNetflix_series_2025] = useState([]);



  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8080/getall').
        then((data) => data.json()).
        then((data) => setNetflix_series_2025(data)).
        catch(err => {
          console.log(err)
        })
    }, 2000)
  }, []);
  return (
    
    <div className='page2'>
      {netflix_series_2025.length > 0 ? (
        <div className="d-flex flex-row me-3" id='a'>{netflix_series_2025.map((netflix_series_2025) => (
          <div className='d-flex justify-content-center ' key={netflix_series_2025.id} >
       
           <img  src={netflix_series_2025.image_url} alt="Image" />
            <h3 className='text ms-2'>{netflix_series_2025.title}</h3>
           </div>
           
          
        ))}</div>)
        : (
          <div >

            <h4 className='text-align-center'>Loading Posts......</h4></div>)
      }

    </div>
  )
}

export default Series

 {/* <div className='' key={netflix_series_2025.id}>
                <div className=''>
                    <img src={netflix_series_2025.image_url} alt="Image" />
                    <h1 className='text-white'>{netflix_series_2025.title}</h1>
                </div>
               
            </div> */}