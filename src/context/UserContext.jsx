import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const UserContext=createContext()

const UserProvider = ({children}) => {
  const navigate = useNavigate()

  const [user,setUser] = useState(
   [ {email: "viviz@tienda.cl",
    password: "12341234",
    username:"viviPrueba",
    name: "Vivi",
    lastname: "Prueba",
    birthday: "2020-04-12",
    adress:""}])

  const [userLog,setUserLog] = useState(false)

  const registerUser = async (datos)  => {
    const search = user.some( mail => mail.email===datos.email)

    if (search==false){
      Swal.fire({
        title: "Registro correcto",
        icon: "success",
        confirmButtonColor: "#68D5E8",
        color:"#323232"
      }) 
      setUser([...user, datos])
      
      
      
    } else {
      Swal.fire({
        title: "Usuario ya existe",
        icon: "error",
        confirmButtonColor: "#68D5E8",
        color:"#323232"
      })
  }}

  const logInUser = async (datos) => {
    if (user.length===0){
      Swal.fire({
        title: "No existe el usuario",
        icon: "error",
        confirmButtonColor: "#68D5E8",
        color:"#323232"
      })
    } else{
      const search=user.find(mail => mail.email===datos.email)
      console.log(search.password,datos.password);
      
      if (datos.password===search.password){
        Swal.fire({
          title: "Autentificación correcta",
          icon: "success",
          confirmButtonColor: "#68D5E8",
          color:"#323232"
        })
        const logg=user.map(loggedT =>{
          if(loggedT.email===datos.email){
            return {...loggedT, logged:true}
          }
          return logg
        })  
        setUserLog(logg[0])
        navigate('/')

      } else if(datos.password!=search.password){
        Swal.fire({
          title: "Contraseña incorrecta",
          icon: "error",
          confirmButtonColor: "#68D5E8",
          color:"#323232"
        })
      } else {
        Swal.fire({
          title: "No existe el usuario",
          icon: "error",
          confirmButtonColor: "#68D5E8",
          color:"#323232"
        })
      }
      }
    
  
  }

    // const registerUser = async (datos)  => {
      // const res= await axios.post("http://localhost:3001/api/registro",{email: datos.email,
      //   email_confirm:datos.email_confirm,
      //   password: datos.password,
      //   password_confirm:datos.password_confirm,
      //   username:datos.username,
      //   name: datos.name,
      //   lastname: datos.lastname,
      //   birthday: datos.birthday,
      //   adress:""})
      // localStorage.setItem("token", res.data.token)
      // if (res.data.msg=='Registrado satisfactoriamente'){
      //   Swal.fire({
      //     title: "Registro correcto",
      //     icon: "success",
      //     confirmButtonColor: "#68D5E8",
      //     color:"#323232"
      //   })
      // } else {
      //   Swal.fire({
      //     title: "Usuario ya existe",
      //     icon: "error",
      //     confirmButtonColor: "#68D5E8",
      //     color:"#323232"
      //   })
      // }}
    


  // const logInUser = async (datos) => {
  //   const res= await axios.post("http://localhost:3001/api/login", {email: datos.email, password: datos.password})
  //   localStorage.setItem("token", res.data.token)
    
  //   if (res.data.msg=="Autentificacion correcta"){
  //     setUser( {email: res.data.email, logged: true, token: res.data.token})
  //     navigate('/')

      
  //     Swal.fire({
  //       title: "Autentificacion correcta",
  //       icon: "success",
  //       confirmButtonColor: "#68D5E8",
  //       color:"#323232"
  //     })
  //   } else if (res.data.msg="Contrasena incorrecta") {
  //     Swal.fire({
  //       title: "Contrasena incorrecta",
  //       icon: "error",
  //       confirmButtonColor: "#68D5E8",
  //       color:"#323232"
  //     })
  //   } else if(res.data.msg="No existe el usuario"){
  //     Swal.fire({
  //       title: "No existe el usuario",
  //       icon: "error",
  //       confirmButtonColor: "#68D5E8",
  //       color:"#323232"
  //     })
  //   }
  // }

  // const profileUser = async()=>{
  //   const token= user.token
  //   const res= await axios.get('http://localhost:3001/api/perfil',{
  //     headers:{
  //       Authorization:`Bearer ${token}`,
  //   },
  // })
  // const userData=res.data;
  // setUser({...userData, logged: true})
  // }

  // function profileUserfunc(){
  //   useEffect(()=>{
  //      profileUser()
      //  console.log(userData);
       
      //  setUser(data)
      //  console.log("user",user);
  //   },[])
  // }

  useEffect(()=>{

  },[userLog])

  return <UserContext.Provider value={{user,setUser,registerUser,logInUser,userLog,setUserLog}}>
  {children}
  </UserContext.Provider>

}
export {UserContext, UserProvider}