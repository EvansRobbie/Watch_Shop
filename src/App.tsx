import './App.css'
import Products from './components/Products'
import { Data } from './data/Data'

function App() {

  return (
    <div className="">
      <Products products = {Data}/>
    </div>
  )
}

export default App
