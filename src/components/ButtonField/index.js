import './ButtonField.css'

const ButtonField = (props) => {
    return (
        <button className="button-field">{props.children}</button>
    )
}

export default ButtonField