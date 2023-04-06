import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { itemsCart, selectTotalQuantity, setCartOpen, setGetTotal } from '../cart/CartSlice'


const Navbar = () => {
  const totalQty  = useSelector(selectTotalQuantity)
  const cartItems = useSelector(itemsCart)
  const dispatch = useDispatch()
  // const totalQTY =
  //   dispatch(
  //     setGetTotal
  //   )
  useEffect(() =>{
    dispatch(
      setGetTotal()
    )
  }, [cartItems, dispatch ])

  const openCart = () =>{
    dispatch(setCartOpen({
      isCart:true
    }))
  }
  return (
    <div className='w-full h-20 absolute top-0 left-0 flex items-center justify-between max-w-full px-6 mx-auto opacity-100 z-10'>
    <div>
      <h2 className='text-slate-200'>Logo</h2>
    </div>
    <nav className=''>
      <ul className='flex gap-4'>
        <li className='relative text-slate-200 cursor-pointer '>
          cart
          <div className='absolute -top-3 -right-5 opacity-100 z-10 px-2 rounded-full hover:text-cyan-500 bg-cyan-500 hover:bg-slate-200 '>
            <h3 className='text-slate-200 hover:text-cyan-500 font-bold text-base'>{totalQty}</h3>
          </div>
        </li>
        <li onClick={openCart} className='text-slate-200 cursor-pointer '>Open Sidebar</li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar