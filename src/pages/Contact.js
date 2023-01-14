import React from 'react'
import {useNavigate} from "react-router-dom"
const Contact = () => {
    let navigate = useNavigate()
    const transfer = ()=>{
        alert("transfer successful")
        navigate("/")
        // window.location.href = "index.html"
    }
  return (
    <>
    Contact
    <button onClick={transfer}>Transfer</button>
    </>
  )
}

export default Contact