import axios from 'axios'
import {createContext,useEffect,useState} from 'react'
import { ProductsCart} from '../mockCart'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  const [discount,setDiscount] = useState(0)
  
  let total= cart.reduce((accumulator ,item) => {
    return accumulator += (parseInt(item.product_price)*parseInt(item.total_quantity))}, 0)

  let totalCart= cart.reduce((accumulator ,item) => {
    return accumulator += parseInt(item.total_quantity)}, 0)
  
  const delivery=3000
  const Order=total+delivery-discount

  const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)
  const totalDelivery = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(delivery)
  const totalDiscount = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(discount)
  const totalOrder= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(Order)

  const getData = async () =>{
    const data= await ProductsCart()
    // const response= await axios.get("http://localhost:3001//api/carrito")
    // console.log(response.data);
    
    let newData=data.map(item =>({...item, total_quantity:1, add:true}))
    setCart (newData);
  }

  useEffect (()=>{
    getData()
  },[])

  return <CartContext.Provider value={{cart,setCart,totalCLP,totalDelivery,totalDiscount, totalCart, totalOrder,setDiscount}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 