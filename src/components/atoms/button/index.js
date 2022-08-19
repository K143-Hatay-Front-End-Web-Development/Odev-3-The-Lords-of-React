import './style.css'
import * as svgs from "../../../assets/svg"


const Button = (props) => {
    return (
        <div className='btnContainer'>
                <button className='btn' onClick={props.click}>
                    {svgs.Btn}
                    <span>{props.title}</span>
                </button>
        </div>
    )
}
export default Button