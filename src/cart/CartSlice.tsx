import React from 'react'
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Cart from '../components/Cart'
import { Items } from '../app/type/type'

interface CartState {
  isCart: boolean
  items:Items[]
}
const initialState: CartState = {
  isCart: false,
  items : []
}
const CartSlice =createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state, action: PayloadAction<{
      id:number
      title: string
      price:number
      image:string
    }>) =>{
      const {id, title, price, image} = action.payload
       const itemInCart = state.items.find((item) => item.id === id)
       if (itemInCart){
          itemInCart.quantity++
       }
       else{
        state.items.push({id, title, price,image, quantity:1})
       }
    },
    setCartOpen:(state, action: PayloadAction<{isCart: boolean}>)=>{
      state.isCart= action.payload.isCart
    },
    setCartClose:(state, action: PayloadAction<{isCart: boolean}>)=>{
      state.isCart = action.payload.isCart
    }
  }
})

export default CartSlice.reducer

export const selectCart = createSelector((state: {cart: CartState}) => state.cart, (cart) => cart.isCart) 
export const itemsCart = createSelector((state:{cart:CartState}) => state.cart, (cart)=> cart.items)

export const {addToCart, setCartClose, setCartOpen} = CartSlice.actions