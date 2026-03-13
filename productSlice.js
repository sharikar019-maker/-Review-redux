import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const fetchProduct = createAsyncThunk({
    "product/fetchProduct",
    async () => {
        const response = await axios.get (
            "https://fakestoreapi.com/products"
        )
    }
})


 
const productSlice = createSlice({
    name : "product",
    initialState: {
        loading : false,
        item : [] ,
        error : null,

    },
    reducers : {}
    },
    extraReducers : (builder) => {
        builder
        .addCase (fetchProduct.pending, (state) => {
           state.loading = true
           state.error = null
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false
            state.item = action.payload
        } )
        .addCase(fetchProduct.rejected,(state,action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
    
)

export default productSlice.reducer