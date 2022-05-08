import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Myitems = () => {
    const [user] = useAuthState(auth)
    const [items, setitems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getitems = async () => {
            const email = user?.email;
            const url = `https://radiant-temple-39327.herokuapp.com/item?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setitems(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getitems();
    }, [user])
    return (
        <div style={{ minHeight: '100vh' }}>
            <h2>You have added: {items.length} bike(s)</h2>
            <Table striped bordered hover size="sm">
                <tbody>
                    {
                        items.map(item => < >
                            <tr key={item._id}>
                                <td><img src={item.image} style={{ width: '150px', height: '150px' }} alt="" srcset="" /></td>
                                <td ><h5>{item.name}</h5> <br />
                                <h5>Price:{item.price}</h5> <br />
                                <h5>Brand:{item.supplier_name}</h5>
                                </td>
                            </tr>
                        </>)
                    }
                </tbody>            </Table>
        </div>
    );
};

export default Myitems;