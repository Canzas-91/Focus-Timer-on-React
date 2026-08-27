import '../styles/Buttons.css'
const Button = (props) => {
    const { className, onClick, title } = props
    return (

        <button className={`buttons-control ${className}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button