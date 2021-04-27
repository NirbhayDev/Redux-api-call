import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Card} from 'react-bootstrap';
import axios from 'axios';
import './styles/style.css';
import {Link} from 'react-dom';

const ProductComponent = ()=>{
    const products =  useSelector(state => state.allProducts.products);
     const renderList = products.map((product)=>{
         const {id, title, price, description, category, image} =product;
         return(
            <div className='main'>
        
            <div className='card_collection'>
     
             <div className='card'>
             <Card style={{ width: '18rem' }}>
               <img src= {image}  />
             <Card.Body>
             <Card.Title>{title}</Card.Title>
             <Card.Title>${price}</Card.Title>
             
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
             </Card>
             </div>

             <div className='card'>
             <Card style={{ width: '18rem' }}>
               <img src= {image}  />
             <Card.Body>
             <Card.Title>{title}</Card.Title>
             <Card.Title>${price}</Card.Title>
             
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
             </Card>
             </div>
             <div className='card'>
             <Card style={{ width: '18rem' }}>
               <img src= {image}  />
             <Card.Body>
             <Card.Title>{title}</Card.Title>
             <Card.Title>${price}</Card.Title>
             
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
             </Card>
             </div>

             <div className='card'>
             <Card style={{ width: '18rem' }}>
               <img src= {image}  />
             <Card.Body>
             <Card.Title>{title}</Card.Title>
             <Card.Title>${price}</Card.Title>
             
              <Button variant="primary">Go somewhere</Button>
             </Card.Body>
             </Card>
             </div>


             
             </div>

             
             </div>
             
         )
     })
    return(
       <div>{renderList}</div>
    )
}

export default ProductComponent;