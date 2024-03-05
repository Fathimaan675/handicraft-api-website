
import './App.css'
import Landing from './pages/Landing'
import { Routes,Route } from 'react-router-dom'
import Products from './pages/Products'
import Footer from './Footer'
import Header from './Header'
import Cart from './pages/Cart'

function App() {


  return (
    <>
    <Header/>
   
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/Product' element={<Products/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      <br/><br/>   <br/><br/>   <br/><br/> 
      <Footer/>
    </>
  )
}

export default App
