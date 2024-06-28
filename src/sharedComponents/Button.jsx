

const Button =({btnId,btnText,btnType,btnClick})=>{
    return <button type={btnType} id={btnId} onClick={btnClick}>{btnText}</button>
}
export default Button