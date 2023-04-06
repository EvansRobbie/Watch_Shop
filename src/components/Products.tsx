import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Items } from '../app/type/type'
import { addToCart, setGetTotal } from '../cart/CartSlice'

type CartTotalProp = {
    cartTotalQTY:number
}
interface Product <T>{
    products: T[] 
    cartTotalQTY:number

}
const Products = <T extends Items  >({products}:Product<T>) => {
    const dispatch = useDispatch()
    const handleAddToCart = (product: Items) =>{
        dispatch(
            addToCart(
                {
                    id: product.id, 
                    image:product.image, 
                    title: product.title, 
                    price: product.price, 
                    quantity:product.quantity, 
                    description:product.description
                }
                )
                 )
        
    }
    const productsElement = products.map((product)=>{
        const {id, title, description, image, price,} = product
        return(
            <div key={id} className='w-full relative  flex flex-col group h-[40vh] rounded-xl  border-0 border-cyan-500 shadow-md hover:shadow-cyan-400 hover:border hover:scale-105 duration-500 ease-in '>
                <div className='w-full h-[20vh]  overflow-hidden rounded-t-xl '>
                    <img className='w-full h-full object-cover hover:scale-125 duration-500 ease-in' src={image} alt="" />
                </div>
                <div className='w-full flex flex-col px-1 py-3'>
                    <div className='flex w-full items-center justify-around'>
                        <h2 className='text-xs text-slate-200 font-bold uppercase'>{title}</h2>
                        <h4 className='text-sm bg-cyan-500 text-slate-200 rounded-md py-0.5 px-1 group-hover:bg-transparent group-hover:border group-hover:text-cyan-500 border-cyan-200 duration-300 ease-in font-medium'>$ {price.toFixed()}</h4>
                    </div>
                    <p className='text-slate-200 text-sm'>{description}</p>
                    <div className=' absolute text-center z-20 left-0 -bottom-10 opacity-0 rounded-tr-xl rounded-bl-xl w-8/12 overflow-hidden group-hover:opacity-100 group-hover:bottom-0 bg-gradient-to-tr from-cyan-500 to-slate-200 py-0.5 duration-300 ease-in px-2'>
                    <button onClick={()=>handleAddToCart(product)} className='text-slate-900  active:scale-105 text-xs font-bold uppercase  overflow-hidden'>Add to Cart</button>
                </div>
                </div>
               
                
            </div>
        )
    })
  return (
    <div className=' relative w-full h-full max-w-[1140px] py-5 px-2 gap-4 mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16'>
        {productsElement}
    </div>
  )
}

export default Products