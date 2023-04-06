import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { Items } from '../app/type/type'

interface CartState {
  isCart: boolean
  items:Items[]
  cartTotalAmount: number
  cartTotalQTY : number
}
const initialState: CartState = {
  isCart: false,
  items : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || ''):[], 
  cartTotalAmount: 0,
  cartTotalQTY : 0
}
const CartSlice =createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state, action: PayloadAction<Items>) =>{
      const {id, title, price, image,description} = action.payload
       const itemInCart = state.items.find((item) => item.id === id)
       if (itemInCart){
          itemInCart.quantity++
       }
       else{
        state.items.push({id, title, price,image,description, quantity:1})
       }
       localStorage.setItem('cart', JSON.stringify(state.items))
    },
    setCartOpen:(state, action: PayloadAction<{isCart: boolean}>)=>{
      state.isCart= action.payload.isCart
    },
    setCartClose:(state, action: PayloadAction<{isCart: boolean}>)=>{
      state.isCart = action.payload.isCart
    }, 
    increaseQTY:(state, action: PayloadAction<{id:number}>)=>{
      const {id} = action.payload
       const itemInCart = state.items.find((item) => item.id === id)
       if (itemInCart){
          itemInCart.quantity += 1
       }
       localStorage.setItem('cart', JSON.stringify(state.items))
    },
    decreaseQty: (state, action: PayloadAction<{id:number}>)=>{
      const {id} = action.payload
      const itemInCart = state.items.findIndex((item) => item.id === id)
      if (state.items[itemInCart].quantity > 1){
         state.items[itemInCart].quantity -=1
         
      }
      else{
        const removeItem = state.items.filter((item)=>item.id !== id)
        state.items = removeItem
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCart:(state, action: PayloadAction<Items>)=>{
      const removeItem = state.items.filter((item)=>item.id !== action.payload.id)
      state.items = removeItem
      localStorage.setItem('cart', JSON.stringify(state.items))
    }, 
    clearCart:(state)=>{
      state.items=[]
      localStorage.setItem('cart', JSON.stringify(state.items))
    }, 
    setGetTotal: (state)=>{
        let { totalAmount, totalQuantity } = state.items.reduce((cartTotal, cartItem) =>{
            const {price, quantity} = cartItem
            const totalPrice = price * quantity

            cartTotal.totalAmount += totalPrice
            cartTotal.totalQuantity  += quantity
            return cartTotal
        }, {
          totalAmount:0,
          totalQuantity:0
        })
        state.cartTotalAmount = totalAmount
        state.cartTotalQTY = totalQuantity
    }
  }
})

export default CartSlice.reducer

export const selectCart = createSelector((state: {cart: CartState}) => state.cart, (cart) => cart.isCart) 
export const itemsCart = createSelector((state:{cart:CartState}) => state.cart, (cart)=> cart.items)
export const selectTotalAmount = createSelector((state: {cart: CartState}) => state.cart, (cart) => cart.cartTotalAmount)
export const  selectTotalQuantity = createSelector((state: {cart:CartState}) => state.cart, (cart)=> cart.cartTotalQTY)


export const {addToCart, setCartClose, setCartOpen, increaseQTY, decreaseQty, removeFromCart, setGetTotal, clearCart} = CartSlice.actions