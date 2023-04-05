import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { itemsCart, selectCart, setCartClose } from '../cart/CartSlice'
import CartEmpty from './CartEmpty'
import CartItems from './CartItems'

const Cart = () => {
  const ifState = useSelector(selectCart)
  const cartItems = useSelector(itemsCart)
  // console.log(cartItems)
  const dispatch = useDispatch()

  const  closeCart = () =>{
    dispatch(setCartClose({
      isCart:false
    }))
  }
  return (
    <div className={`${ifState ? 'right-0': '-right-full '} w-full fixed h-screen max-w-full bg-slate-900/30 top-0  z-20  backdrop-blur opacity-100 duration-500 ease-in`} >
      <div className='max-w-[500px] w-full fixed top-0 right-0  opacity-100 z-30 h-screen bg-slate-900/60'>
        <div className=' font-medium'>
          <div onClick={closeCart}>
            cart
          </div>
          {cartItems.length === 0? <CartEmpty/> : <div>
           {cartItems.map((item)=>{
            // console.log(item)
            return(
              <div key={item.id} className='w-full h-full py-2 px-2'>
                <CartItems cartItems ={item}/>
              </div>
            )
           })}
          </div> }
          
        </div>
      </div>
    </div>
  )
}

export default Cart