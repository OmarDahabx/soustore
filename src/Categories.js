import React from 'react'
import menCat from './assets/men.jpg'
import womCat from './assets/woman.jpg'
import acceCat from './assets/accessories.jpg'

const Categories = () => {
  return (
    <>
        <div className='categories'>
            <div className='container-fluid'>
                <div className='row coty'>

                    <div className='col-md-4 cator text-center'>
                        <img src={menCat} className='img-fluid cat-men cat-all' alt='men-category' style={{}} />
                        <div className='cat-text'>
                                <button className='btn btn-outline-light' href='' >Men Category</button>
                        </div>
                    </div>

                    <div className='col-md-4 cator text-center'>
                        <img src={womCat} className='img-fluid cat-wom cat-all' alt='woman-category'/>
                        <div className='cat-text'>
                            <button className='btn btn-outline-light' href='' >Woman Category</button>
                        </div>
                    </div>

                    <div className='col-md-4 cator text-center'>
                        <img src={acceCat} className='img-fluid cat-acc cat-all' alt='accessories-category'/>
                        <div className='cat-text'>
                            <button className='btn btn-outline-light' href='' >Accessories Category</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Categories