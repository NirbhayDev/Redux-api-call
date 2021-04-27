import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Card} from 'react-bootstrap';
import axios from 'axios';
import {setProducts} from '../redux/actions/productAction';

import ProductComponent from './ProductComponent';
const ProductListing = ()=>{
  const products =  useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    // const {id, product} = products[0];
    console.log(products);

    const fetchData = async ()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log('Errors',err);
        });
        dispatch(setProducts(response.data));
    }

useEffect(()=>{
    fetchData();
}, [])
console.log("Products :", products);
    return(
      <div className='ui grid container'>
       <ProductComponent />
      </div>
    )
}

export default ProductListing;