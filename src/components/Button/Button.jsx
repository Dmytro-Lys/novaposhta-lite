
const Button = ({ title, onClick, width, height }) => {
    return (
        <button type="button"  onClick={onClick} style={{width: {width}, height: {height}}}>{title}</button>
    )
}

export default Button