import {createSlice} from "@reduxjs/toolkit"
import { createSearchParams } from "react-router"


const cartSlice = createSlice({
    name : "product",
    initialState: {
        loading : false,
        item : [] ,
        error : null

    },
    reducers : {
        addToCart : {
       state.item.push (action.payload)
        }
    },
    removeCart : {
      state.item = state.item.filter ((item.id) !== action.payload )
    }
})

export const {addToCart, removeCart} = cartSlice.actions
export default cartSlice.reducer