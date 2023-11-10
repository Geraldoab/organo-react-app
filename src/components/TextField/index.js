import './TextField.css'

const TextField = (props) => {

    const onChange = (event) => {
        props.onType(event.target.value)
    }

    return (
        <div className="text-field">
            <label htmlFor={props.label}>{props.label}</label>
            <input autoComplete={props.autoComplete} id={props.label}  value={props.value} onChange={onChange} required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default TextField