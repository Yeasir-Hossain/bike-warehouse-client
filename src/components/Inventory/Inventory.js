import React from 'react';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import './Inventory.css'

const Inventory = (props) => {
    const six = props.val

    const [bikes, setBikes] = useBikes(six);

    return (
        <div id="bikes" className='container mb-2'>
            <div className="row">
                <h1 className='text-dark text-center mt-5'>BIKES</h1>
                <div className="bikes-container">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        >
                        </Bike>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;