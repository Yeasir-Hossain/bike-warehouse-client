import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Inventory from '../Inventory/Inventory';
import Summary from '../Summary/Summary';


const Home = () => {
    const navigate = useNavigate();
  const navigateSeemore = event => {
      navigate('/inventory');
  }
    return (
        <>
            <Banner></Banner>
            <Inventory val="six"></Inventory>
            <Featured></Featured>
            <Button variant="dark w-25 mx-auto d-block my-5" onClick={navigateSeemore} >
                    See more
            </Button>
            <Summary></Summary>
        </>
    );
};

export default Home;