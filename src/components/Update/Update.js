/* eslint-disable react-hooks/exhaustive-deps */
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
        <div></div>
    );
};

export default Update;