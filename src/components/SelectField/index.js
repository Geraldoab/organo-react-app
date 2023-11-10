import './SelectField.css'

const SelectField = (props) => {
    return (
        <div className="select-field">
            <label htmlFor={props.label}>{props.label}</label>
            <select
                autoComplete={props.autoComplete}
                id={props.label} 
                required={props.required} 
                value={props.value} 
                onChange={event=> { 
                    props.onChange(event.target.value)
                }}> 
                <option key=''></option>
                {
                    props.items.map(item => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectField