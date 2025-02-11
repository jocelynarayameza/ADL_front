import React, { useContext } from 'react'
import CartCard from '../components/cart/cartCard.jsx'
import CartOrder from '../components/cart/CartOrder'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import CartAdress from '../components/cart/cartAdress'

const Cart = () => {
  const {cart}=useContext(CartContext)
  // const cartTrue= cart.filter(item=>(item.add===true))
  

  return (
    <div>
       <h1 id='titleText'>Mi carrito</h1>
       <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} className='p-0'>
          {cart.map((item)=>(
           <CartCard key={item.id_product} 
           name={item.product_name} price={item.product_price} description={item.product_description} img={item.product_photo}  id={item.id_product} quantity={item.product_quantity} category={item.category} seller={item.id_seller} add={item.add} total_quantity={item.total_quantity}
           />))}
          
           <Button variant='danger' className='buttonErase ms-2 my-3'>Vaciar el carrito</Button>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className='p-0'>
          <CartAdress/>
          <CartOrder/>
          </Col>
        </Row>

       </Container>
      
    </div>
  )
}

export default Cart