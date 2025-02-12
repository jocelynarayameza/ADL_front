import axios from 'axios'
import {createContext,useContext,useEffect,useState} from 'react'
import { ProductContext } from './ProductContext'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  const [discount,setDiscount] = useState(0)
  const { products } = useContext(ProductContext)
  
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

  const addCart= async(id)=> {
    const searchProduct=products.find(product => product.id_product===id)
    
    if(cart.length===0){
      setCart([{...searchProduct,total_quantity:1}])
    } else{
      
        if(cart.some(idProduct =>(idProduct.id_product==id))==true){
          const searchProd = cart.find(idProduct =>(idProduct.id_product==id))
          const quantity = {...searchProd,total_quantity:searchProd.total_quantity+1}
          cart.splice(cart.findIndex(idProd => idProd.id_product === id),1,quantity)
          useEffect(() => { setCart(cart) }, [])
          

        } else {
          
          cart.push({...searchProduct,total_quantity:1});
          setCart(a=>cart)
        } 
      }
    }

    const eraseTotalCart = () => {
      setCart([])
    }

    const eraseProdCart = (id) =>{
      cart.splice(cart.findIndex(prod => (prod.id==id)),1)
      setCart(cart)
      
    }


    // try {
      //   const response= await axios.post("http://localhost:3001/api/carrito", {userLog})
  
      //    Swal.fire({
          //   title: "Perfil editado con exito",
          //   icon: "success",
          //   confirmButtonColor: "#68D5E8",
          //   color:"#323232"
          // })
      // } catch (error) {
        // console.error("Error al editar datos:", error);
      // }
    // const newAdd=cart.map(cartN =>{
    //   if(cartN.id===id){
    //     return {...cartN,total_quantity:1}
    //   }
    //   return cartN
    // })
    // console.log(newAdd);
    // setCart(newAdd)
  





  // const getData = async () =>{
  //   try {
  //     // const response= await axios.get("http://localhost:3001//api/carrito")
  //     // console.log(response.data);
      
  //     // setCart (Response.data);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
 
  // }

  useEffect (()=>{

  },[cart])

  return <CartContext.Provider value={{cart,setCart,addCart,totalCLP,totalDelivery,totalDiscount, totalCart, totalOrder,setDiscount, eraseTotalCart,eraseProdCart}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 