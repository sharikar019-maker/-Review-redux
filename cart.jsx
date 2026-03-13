
import {  removeCart } from './cartSlice'
import {useSelector, usedispatch} from "react-redux"

const cart = () => {

const dispatch = usedispatch()

const product = useSelector((state)=> state.products.item)


  return (
    <div>
      <h1> cart page</h1> 
<button onClick={()=>{
    dispatch(removeCart)> Delete </button>
}}
    </div>
  )
}

export default cart
