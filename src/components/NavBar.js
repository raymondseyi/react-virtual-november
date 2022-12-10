const NavBar = () => {
  let myAge = 100
  let myStyle ='bg-danger'
  let mySrc = 'kjkjikjijijio'
  let myLink = "www.google.com"
  let gender = "male"
  let allStudents = [
    {firstname:"Kunle",lastname:"Ajasin"},
    {firstname:"Sola",lastname:"Fola"},
    {firstname:"Kolade",lastname:"Precious"}
  ]
  return (
    <>
      <div className={myStyle}>NavBar {myAge}</div>
      <img src={mySrc} alt="" />
      <a href={myLink}>Link to Google</a>
      <h1 className={gender=='male'?'bg-danger':'bg-success'}>Gender</h1>
      {gender=='male'?<h1>Hello,Na man you be</h1>:<h1>The gender that gave apple to Adam</h1>}



      {
        allStudents.map((each,index)=>(
          <div>
            <h1>{index+1}</h1>
            <h1>{each.firstname} {each.lastname}</h1>
          </div>
        ))
      }
    </>
  )
}
export default NavBar