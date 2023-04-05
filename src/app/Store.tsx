import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../cart/CartSlice'

const Store = configureStore({
  reducer:{
    cart: cartReducer,
  }
})

export default Store