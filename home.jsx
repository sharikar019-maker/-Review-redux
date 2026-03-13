import { useEffect } from "react"
import {useSelector, usedispatch} from "react-redux"
import { useNavigate } from "react-router"
import {fetchProduct} from "./productSlice"



const home = () => {

const dispatch = usedispatch()
const  navigate = useNavigate()
const product = useSelector((state)=> state.products.item)

useEffect(()=>{
    dispatch(fetchProduct())
},[dispatch])

 const addHandler = ()=>{
   navigate("/cart")
 }



  return (
    <div>
      <h1>Products</h1>
   {item.map } (
    <div key={item.id}>
     <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>

    <button onClick={()=>{
      addHandler > Add Cart </button>
    }}
   )

    </div>
  )
}

export default home
