import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, itemsCart, selectTotalQuantity, setCartClose, setGetTotal } from '../../cart/CartSlice'

const CartHeader = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(itemsCart)
    const totalQty = useSelector(selectTotalQuantity)

  useEffect(() =>{
    dispatch(setGetTotal())
  }, [cartItems, dispatch])
  // console.log(cartItems)
 

  const  closeCart = () =>{
    dispatch(setCartClose({
      isCart:false
    }))
  }
  return (
    <div className='w-full h-10 bg-slate-200/80 flex items-center justify-between px-4'>
            <div className=' h-full flex gap-6 items-center'>
              <div onClick={closeCart}>
                {/* close cart icon */}
                cart
              </div>
              <p>Items <span className='text-slate-900 font-bold'>({totalQty})</span></p>
            </div>
            <div onClick={()=> dispatch(clearCart())}>
              {/* Empty cart icon */}
              <p>Delete Cart</p>
            </div>

          </div>
  )
}

export default CartHeader