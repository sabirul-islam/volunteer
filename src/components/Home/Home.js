import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const [volunteer, setvolunteer] = useState([]);
    console.log(volunteer);

    useEffect(()=>{
        fetch('https://stormy-beyond-13173.herokuapp.com/volunteers')
        .then(res => res.json())
        .then(data => setvolunteer(data))
    }, [])

    return (
        <div className='text-center'>
            <h1 className='text-center my-3'>I GROW BY HELPING PEOPLE IN NEED.</h1>
            
            <div className='d-inline-flex mb-3'>
            <Form inline>
            <FormControl type="text" placeholder="Search"/>
            <Button className='mr-2' variant="primary">Register</Button>
            </Form>
            </div>
            
            <div className='row'>
                {
                   volunteer.map(data=>
                   <Card className='col-md-3' style={{ width: '18rem' }}>
                    <Link to={'/volunteers/'+ data._id}>
                   <Card.Img variant="top" src={data.img} />
                   </Link>
                   <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                   </Card.Body>
                 </Card>)
                }
            </div>
            

            
        </div>
    );
};

export default Home;