import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast} from 'react-toastify';

const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(0)
    useEffect(() => {
        fetch(`https://radiant-temple-39327.herokuapp.com/bike/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setQty(data.quantity)
            })
    }, [qty])

    const handleUpdateproduct = event => {
        event.preventDefault()
        const quantity = parseInt(event.target.quantity.value) + parseInt(product.quantity)
        const updateproduct = { quantity }
        fetch(`https://radiant-temple-39327.herokuapp.com/bike/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                setQty(quantity)
                toast.success('Product updated successfully')
            })
        event.target.quantity.value = ''
    }
    const handleDeliveryproduct = event => {
        event.preventDefault()
        if (parseInt(product.quantity) === 0) {
            return toast.error('stock out')
        }
        const quantity = parseInt(product.quantity) - 1
        const updateproduct = { quantity }
        fetch(`https://radiant-temple-39327.herokuapp.com/bike/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                setQty(quantity)
                toast.success('product delivered successfully')
            }
            )
    }
    return (
        <div>
            <Container>
                <Row xs={1} md={2} className='my-5 border p-3 shadow-lg rounded'>
                    <Col><img src={product.image} className='w-75' alt="" srcset="" /></Col>
                    <Col style={{ marginTop: '6%' }}> <h2>Updating Product: {product.name}</h2>
                        <p><strong>Quantity: {qty}</strong></p>
                        <h5>Brand: {product.supplier_name}</h5>
                        <h5><strong>Features:</strong><br />{product.description}</h5><br />
                        <form onSubmit={handleUpdateproduct} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                            <input type="number" min={1} name='quantity' placeholder='enter quantity' required />
                            <br />
                            <Button className='rounded ms-1 pt-1 w-100' variant="dark" size="lg" type="submit">Add to stock</Button>
                        </form>
                        <Button className='mx-auto my-2 w-100' variant="success" size="lg" onClick={handleDeliveryproduct}>Delivered</Button></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Update;