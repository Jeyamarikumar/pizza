import React from 'react'
import image from './assets/m1.jpg'
import image0 from './assets/backiee-303290.jpg'
import image1 from './assets/d0d0dcf7-e327-4e70-820d-00a5ce9ac552.jpeg'
import image2 from './assets/f619a2dc-dea3-4a20-b86b-916929e31531.jpeg'

function Card() {

  return (
    <>
    <div className='profile'>
      <img className='rounded-circle' src={image} alt="Profile picture" />
      <h1 className='fs-4'>...Mr.Strange...</h1>
      <span className='fs-6'>As Long As I Live There Are Infinite Chances.</span>
    </div>
    <div className='slider'>
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <h1 className='m-4'>POSTS</h1>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image0} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  )
}

export default Card
