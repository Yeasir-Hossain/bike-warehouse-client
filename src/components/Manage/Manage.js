import React from 'react';
import { Table, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, } from 'react-toastify';
import useBikes from '../../hooks/useBikes';

const Manage = () => {
    const [bikes,setBikes] = useBikes();
    const handleDelete = id => {
        const proceed = window.confirm('Please confirm if you want to delete?')
        if (proceed) {
            fetch(`https://radiant-temple-39327.herokuapp.com/bike/${id}`,{
                method: 'DELETE'})
            .then(res => res.json())
    .then(data => {
        console.log(data)
        const remaining = bikes.filter(bike => bike._id !== id)
        setBikes(remaining)
    })
toast.error('Deleted Successfully!')
    }
}

const navigate = useNavigate();
const navigateAddmore = event => {
    navigate('/add');
}
return (
    <div className='mx-auto my-4' style={{ minHeight: '100vh' }}>
        <div className='d-flex text-center flex-column my-4'>
            <h2 className='mt-1'>Bike Stocks</h2>
            <Button className='m-2 w-25 mx-auto' variant="dark" size="lg" onClick={() => navigateAddmore()}>Add more</Button>
        </div>
        <Table striped bordered hover size="sm">
            <tbody>
                {
                    bikes.map(bike => < >
                        <tr key={bike._id}>
                            <td><img src={bike.image} style={{ width: '150px', height: '150px' }} alt="" srcset="" /></td>
                            <td ><h5 className='text-center'>{bike.name}</h5></td>
                            <td><Button variant="danger" onClick={() => handleDelete(bike._id)}>Delete</Button></td>
                        </tr>
                    </>)
                }
            </tbody>
        </Table>
    </div>
);
};

export default Manage;