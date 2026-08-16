import '../styles/Buttons.css'
const Button = (props) => {
    const { className, onClick } = props
    return (

        <button className={`buttons-control ${className}`} onClick={onClick}>
        </button>
    )
}

export default Button