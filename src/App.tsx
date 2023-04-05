import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Data } from './data/Data'

function App() {

  return (
    <div className="">
      <Navbar/>
      <Products products = {Data}/>
      <Cart/>
    </div>
  )
}

export default App
