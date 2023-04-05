import React from 'react'
import { useDispatch} from 'react-redux'
import { selectCart } from '../cart/CartSlice'
import { setCartOpen } from '../cart/CartSlice'


const Navbar = () => {
  
  const dispatch = useDispatch()

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
        <li className='text-slate-200 cursor-pointer '>Cart</li>
        <li onClick={openCart} className='text-slate-200 cursor-pointer '>Open Sidebar</li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar