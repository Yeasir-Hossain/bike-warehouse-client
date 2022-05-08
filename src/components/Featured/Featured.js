import React from 'react';
import image1 from '../../images/featured/d-j-aASyJ2ehezU-unsplash.jpg'
import image2 from '../../images/featured/frank-weichelt-jT6YdrhJwNM-unsplash.jpg'
import image3 from '../../images/featured/aditya-joshi-zKK9CkEtJxY-unsplash.jpg'


const Featured = () => {
    return (
        <div className='text-center my-4'>
            <h1>Dream Bikes</h1>
            <div class="d-flex justify-content-center my-5" style={{height:"250px" , width:"100%"}}>
                <img style={{height:"250px" , width:"300px"}} className='img-fluid me-5' src={image1} alt="" />
                <img style={{height:"250px" , width:"300px"}} className='img-fluid me-5' src={image2} alt="" />
                <img style={{height:"250px" , width:"300px"}} className='img-fluid' src={image3} alt="" />
            </div>
        </div>
    );
};

export default Featured;