//Topic: clsx npm module

import '../styles/Buttons.css'
const Button = (props) => {
    const { className, onClick, title } = props
    return (
        // Отличное место чтобы рассказать про clsx
        // В NextJS отлично описано для чего он нужен 
        // https://nextjs.org/learn/pages-router/assets-metadata-css-styling-tips#using-clsx-library-to-toggle-classes
        // https://antondevtips.com/blog/conditional-class-rendering-in-react-using-clsx
        <button className={`buttons-control ${className}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button