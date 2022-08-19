import './style.css'

const Input = (props) => {

  const { type, title, inputid, inputValue, inputname, inputOnClick,classes,labelClass } = props

  
  return (
    
      <>
      <input
        id={inputid} 
        name={inputname} 
        type={type} 
        onClick={inputOnClick} 
        value={inputValue} 
        className={classes}/>
      <label 
        className={labelClass} 
        htmlFor={inputid}
        >
        {title}
      </label></>
  )
}

export default Input
