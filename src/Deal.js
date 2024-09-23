import React from 'react'
import nikeimg from './assets/nike.png'

const Deal = () => {
  return (
    <>
        <div className='deal mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 deal-text'>
                        <h4>Deal <br/> of the day</h4>
                        <hr className='masfa-deal text-muted'/>
                        <h5>Sneakers Skate Shoe Nike</h5>
                        <h5>$255 <span className='text-muted'><del>$355</del></span></h5>
                        <p className='my-4'>Ahowed a lady fitted out with a fur hat and fur boa who sat upright raising a heavy fur muff that coverd the wholeShowed a lady fitted out with a fur hat and fur boa who sat upright raising a heavy fur muff</p>
                        <h6>
                            <span>45<br/>Days</span>
                            <span>13<br/>Hours</span>
                            <span>25<br/>Mins</span>
                            <span>27<br/>Secs</span>
                        </h6>

                        <button className='btn btn-dark'>SHOP NOW</button>
                    </div>

                    <div className='col-6'>
                        <img src={nikeimg} alt='deal-img' style={{width:'550px', height:'550px'}}/>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Deal