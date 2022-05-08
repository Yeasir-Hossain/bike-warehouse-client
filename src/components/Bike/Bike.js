import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css'

const Bike = ({bike}) => {
    const {_id, name, image, price,quantity,supplier_name,sold} = bike;
    const navigate = useNavigate();


    const navigateToUpdate = id =>{
        navigate(`/update/${id}`);
    }

    return (
        <div className='bike p-2 w-100 shadow-lg'>
            <img className='w-100 h-50' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price} </p>
            <p>Available: {
                quantity>0? <span>{quantity}</span>:<span style={{color:'red'}}>stock out</span>
            }</p>
            <p>Sold:{sold}</p>
            <p>{supplier_name}</p>
            <button onClick={() => navigateToUpdate(_id)} className='btn btn-dark mx-auto d-block'>Update</button>
        </div>
    );
};

export default Bike;