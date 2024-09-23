import React from 'react'

const Join = () => {
  return (
    <>
        <div className='join text-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>JOIN OUR LIST</h4>
                        <h6>Get timely updates from your favorite products</h6>
                        <div className='sendmail m-auto'>
                            <form>
                                <input type='mail' name='mail' placeholder='Email adress...' className='form-control m-auto'/>
                                <input type='submit' name='submit' value='SUBSCRIB' className='btn btn-dark m-auto'/>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Join