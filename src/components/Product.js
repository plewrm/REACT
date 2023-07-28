import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CartSlice';
import { getProducts } from '../Store/ProductSlice';
import Alert from 'react-bootstrap/Alert';
import StatusCode from '../Utils/StatusCode';
const Product = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if(status === StatusCode.LOADING){
        return <p className='text-center'>Loading....</p>
    }
    if(status === StatusCode.ERROR){
        return <Alert className='text-center' key="danger" variant="danger">
            Something Went Wrong! Please try again later...
            </Alert>
    }
    const addToCart = (products) => {
        dispatch(add(products))
        console.log("See here Product info", products);
    }

    const productData = products.map((products) => (
        <div className='col-md-3 ' style={{ marginBottom: '10px' }} key={products.id}>
            <Card className='h-100 d-flex flex-grow-1'  >
                <div className="text-center">
                    <Card.Img variant="top" src={products.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <div className="text-start">
                        <Card.Title>{products.title}</Card.Title>
                    </div>
                    <Card.Text>
                        <strong >INR:</strong> {products.price}
                    </Card.Text>
                    <Card.Text>
                        {products.category}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Button variant="primary" onClick={() => addToCart(products)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>

      <h1 className='text-center'>Product Dashboard</h1>
            <div className="container">
                <div className='row mt-5 d-flex flex-wrap'>
                    {productData}
                </div>
            </div>
        </>
    )
}

export default Product
