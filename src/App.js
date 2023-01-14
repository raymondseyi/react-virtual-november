import NavBar from './components/NavBar'
import myStyle from './Mystyle.module.css'
import Footer from './components/Footer'
import StudentPortal from './components/StudentPortal'
import Button from './components/Button'
import AddTodo from './components/AddTodo'
import DisplayTodo from './components/DisplayTodo'
import { useState } from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NavBarB from './components/NavBarB.js'
import NotFound from './pages/NotFound'
import UserPage from './pages/UserPage'
import Api from './components/Api'
import Effect from './components/Effect'
function App(){
  // const sayHello = (myName)=>{
  //   alert("Hello "+ myName);
  // }
  const pushTodo = (todoitem) => {
    setallTodo([...allTodo,todoitem])
  };
  const [allTodo, setallTodo] = useState([])
  return(
  <>
    <NavBarB/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:username' element={<UserPage/>}/>
      <Route path='/home' element={<Navigate to='/'/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path ="/api" element={<Api/>}/>
      <Route path ="/effect" element={<Effect/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

  </>
  )
}
export default App


//Internal, Inline, External
//React Fragment
//JSX Javascript XML
