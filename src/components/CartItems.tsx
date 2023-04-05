import React from 'react'
import { Items } from '../app/type/type'
interface CartItem {
    cartItems: Items
}

const CartItems  = ({cartItems: {id, quantity, image, title, price}}:CartItem) => {
    
  return (
    <div className='flex items-center px- pr-4 gap-4 border hover:shadow-cyan-500 shadow overflow-hidden border-cyan-500 rounded-xl'>
        <div className=' w-56 h-24  '>
            <img src={image} className=' w-full h-full hover:scale-125 object-fill  ' alt="" />
        </div>
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
            <h2 className='text-slate-200 text-base font-bold'>{title}</h2>
            <h2 className='text-slate-200 text-lg font-bold'> $ {price}</h2>
            </div>
        
        
        <div className='w-full flex justify-center gap-14 py-3'>
            <div className='w-6 h-6 bg-cyan-500 rounded-md cursor-pointer active:scale-105 shadow-xl shadow-slate-200 flex items-center justify-center'>
             <span className='text-slate-900 -mt-1.5  font-bold text-3xl text-center'>-</span>
            </div>
            <span className='font-bold text-slate-200 border border-slate-200 px-2 rounded-md text-base'>{quantity}</span>
            <div className='w-6 h-6 bg-cyan-500 rounded-md cursor-pointer active:scale-105  hover:shadow-slate-200 shadow-xl  shadow-slate-00 flex items-center justify-center'>
             <span className='text-slate-900 -mt-0.5  font-bold text-xl '>+</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CartItems