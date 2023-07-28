import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice';
const Cart = () => {
  const bookProduct = useSelector(state => state.cart)
const dispatch=useDispatch()
  const productBooked = bookProduct.map((item) => (
    <div className='col-md-12 'key={item.id} style={{ marginBottom: '10px' }} >
      <Card className='h-100 d-flex flex-grow-1' >
        <div className="text-center">
          <Card.Img variant="top" src={item.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <div className="text-start">
            <Card.Title>{item.title}</Card.Title>
          </div>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            <strong >INR:</strong> {item.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className='text-center'>
          <Button variant="danger" onClick={()=> removeFromCart(item.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  const removeFromCart =(id)=>{
    dispatch(remove(id))
  }
  return (
    <div className="container">
      <div className='row mt-5 d-flex flex-wrap'>
        {productBooked}
      </div>
    </div>
  )
}

export default Cart
