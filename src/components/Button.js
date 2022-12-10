const Button = (props) => {
    console.log(props)
  return (
    <>
        <button onClick={()=>props.sayHello("Kunle")} className={props.color}>{props.title}</button>
    </>
  )
}

export default Button