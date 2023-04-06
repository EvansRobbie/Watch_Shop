import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Items } from '../../app/type/type'
import { removeFromCart, increaseQTY, decreaseQty } from '../../cart/CartSlice'
interface CartItem {
    cartItems: Items
}

const CartItems  = ({cartItems: {id, quantity, image, title, price, description}}:CartItem) => {
    const dispatch= useDispatch()
    
    const increaseQuantity = () =>{
        dispatch(increaseQTY({id}))
    }
    const decreaseQuantity = () =>{
        dispatch(decreaseQty({id}))
    }
    
  return (
    <div className='flex items-center pr-4 gap-4 border hover:shadow-cyan-500 bg-slate-200/30 shadow overflow-hidden border-cyan-500 rounded-xl'>
        <div className='relative w-56 h-24  '>
            <img src={image} className=' w-full h-full hover:scale-110 object-cover duration-500 ease-in ' alt="" />
            <div className='absolute top-0 right-0 z-20 opacity-100 bg-slate-200/30 px-1 my-1 mx-2 rounded-md'>
                <p className='text-slate-200 text-xs'>$ {price.toFixed()}</p>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
            <h2 className='text-slate-200 text-base font-bold'>{title}</h2>
            <h2 className='text-slate-200 text-lg font-bold'>{(price * quantity).toFixed()}</h2>
            </div>
        
        
        <div className='w-full flex justify-center gap-14 py-3'>
            <div onClick={decreaseQuantity} className='w-6 h-6 bg-cyan-500 rounded-md cursor-pointer active:scale-105 shadow-xl shadow-slate-200 flex items-center justify-center'>
             <span className='text-slate-900 -mt-1.5  font-bold text-3xl text-center'>-</span>
            </div>
            <span className='font-bold text-slate-200 border border-slate-200 px-2 rounded-md text-base'>{quantity}</span>
            <div onClick={increaseQuantity} className='w-6 h-6 bg-cyan-500 rounded-md cursor-pointer active:scale-105  hover:shadow-slate-200 shadow-xl  shadow-slate-00 flex items-center justify-center'>
             <span className='text-slate-900 -mt-0.5  font-bold text-xl '>+</span>
            </div>
            <div onClick={()=> dispatch(removeFromCart({id, title, image,price, quantity, description}))} className='text-slate-200'>
                Trash
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartItems