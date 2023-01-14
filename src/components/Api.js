import React,{useState,useEffect} from 'react'
import axios from "axios"
const Api = () => {
    const [users, setusers] = useState([])
    const [isloading, setisloading] = useState(true)
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    let endpoint2 = "https://api.github.com/users"
    useEffect(() => {
      callApi()
    }, [])
    
    const callApi = ()=>{
        console.log("hello");
        axios.get(endpoint2)
        .then((response)=>{
            setisloading(false)
            console.log(response.data)
            setusers(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const getLocation = ()=>{
        navigator.geolocation.getCurrentPosition((response)=>{
            console.log(response.coords.latitude)
        })
    }
  return (
    <>
        <h1>Api</h1>
        <button onClick={callApi}>Call API</button>
        {
            isloading? <div>...loading</div> :
            users.map((user,i)=>(
                <div key={i}>
                    <h1>{user.login}</h1>
                    <img src={user.avatar_url} alt="" />
                </div>
                
            ))
        }
       
        <button onClick={getLocation}>Get Location</button>
    </>
  )
}

export default Api