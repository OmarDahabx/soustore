import React from 'react'
import cars1 from './assets/1.jpg';
import cars2 from './assets/2.jpg';
import cars3 from './assets/3.jpg';

const HomeLand = () => {
  return (
    <>
        <div id="carouselExampleIndicators" class="carousel slide carrs" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cars1} class="d-block w-100" alt="..." style={{height:"703px"}}/>
    </div>
    <div class="carousel-item">
      <img src={cars2} class="d-block w-100" alt="..." style={{height:"703px"}}/>
    </div>
    <div class="carousel-item">
      <img src={cars3} class="d-block w-100" alt="..." style={{height:"703px"}} />
    </div>

    <div className='carrs-text'>
        <h1 className='text-light'>SOU STORE</h1>
        <h3 className='my-4 text-light'>WINTER <br/> <span>COLLECTION</span></h3>
        <button className='btn btn-outline-light'>SHOP NOW</button>
  </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default HomeLand