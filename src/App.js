import NavBar from './components/NavBar'
import myStyle from './Mystyle.module.css'
import Footer from './components/Footer'
import StudentPortal from './components/StudentPortal'
import Button from './components/Button'
import AddTodo from './components/AddTodo'
import DisplayTodo from './components/DisplayTodo'
import { useState } from 'react'
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
    <AddTodo pushTodo={pushTodo}/>
    <DisplayTodo allTodo={allTodo}/>
    {/* <Button title="Edit" color="btn btn-warning" sayHello={sayHello}/>
    <Button title="Delete" color="btn btn-danger" sayHello={sayHello}/>
    <Button title="Rusticate" color="btn btn-dark"  sayHello={sayHello}/> */}
    {/* <StudentPortal/> */}
   
  </>
  )
}
export default App


//Internal, Inline, External
//React Fragment
//JSX Javascript XML
