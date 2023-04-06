import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { itemsCart, selectCart, selectTotalAmount, setGetTotal  } from '../cart/CartSlice'
import CartEmpty from './cart/CartEmpty'
import CartHeader from './cart/CartHeader'
import CartItems from './cart/CartItems'

const Cart = () => {
  const dispatch = useDispatch()
  const ifState = useSelector(selectCart)
  const cartItems = useSelector(itemsCart)
  const totalCost = useSelector(selectTotalAmount)
 
  useEffect(() =>{
      dispatch(setGetTotal())
  }, [cartItems, dispatch])
  
  
  return (
    <div className={`${ifState ? 'right-0': '-right-full '} w-full fixed h-screen max-w-full bg-slate-900/30 top-0  z-20  backdrop-blur opacity-100 duration-500 ease-in`} >
      <div className='max-w-[500px] w-full fixed top-0 right-0  opacity-100 z-30 h-screen bg-slate-900/60'>
        <div className=' font-medium'>
          <CartHeader/>
          

            {cartItems.length === 0 ? <div><CartEmpty/></div> :
            <div className='w-full h-screen'>

             <div className='w-full h-[80vh]  overflow-y-scroll'>
                {
                cartItems.map((item)=>{
                  // console.log(item)
                  return(
                    <div key={item.id} className='w-full  py-2 px-2'>
                      <CartItems cartItems ={item}/>
                    </div>
                  )
                })
                }
            </div>
            <div className='w-full h-full flex flex-col items-center bg-slate-200/80 my-2'>
            <div className='flex justify-between w-full px-4 py-2'>
              <h1 className='uppercase font-bold text-sm sm:text-base md:text-lg text-slate-900'>Total</h1>
              <p className='text-slate-900 font-bold text-base md:text-lg'>$ {totalCost.toFixed()}</p>
            </div>
            <div className='w-6/12 py-1 rounded-xl my-1 active:scale-105  text-slate-200 hover:text-slate-900 hover:border border-cyan-500 shadow-xl hover:shadow-slate-900 flex bg-gradient-to-tr from-cyan-500 to-slate-900 justify-center duration-500 ease-in'>
              <button className=' font-bold '>Checkout</button>
            </div>
          </div>
            </div>

            } 
            
          
        </div>
      </div>
    </div>
  )
}

export default Cart