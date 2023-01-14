import React,{useEffect,useState} from 'react'

const Effect = () => {
//   useEffect(() => {
//     first
  
//     return () => {
//       second
//     }
//   }, [third])
  const [number, setnumber] = useState(0)
  const [firstname, setfirstname] = useState("")
  useEffect(()=>{
    // setnumber(number+1)
  })

  const test = ()=>{
    setnumber(number+1)
  }
  
  return (
    <>
        <button onClick={test}>Test</button>
        <button onClick={()=>setfirstname("kunle")}>Change firstname</button>
    </>
  )
}

export default Effect