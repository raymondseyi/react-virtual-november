import React from 'react'
import { useParams } from 'react-router-dom'
const UserPage = () => {
    // let params = useParams()
    // console.log(params.username)
    let {username} = useParams()
    // let student = {
    //     firstname:"Enda",
    //     lastname:"Rae"
    // }
    // let {firstname,lastname} = student
    // console.log(firstname,lastname)
    console.log(username)
  return (
    <div>UserPage {username}</div>
  )
}

export default UserPage