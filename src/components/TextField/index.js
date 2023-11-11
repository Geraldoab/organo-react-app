import './TextField.css'

const TextField = ({label, autoComplete, value, required, type = 'text', placeholder, maxLength = 120, onType}) => {

    const onChange = (event) => {
        onType(event.target.value)
    }

    return (
        <div className={`text-field type-${type}`}>
            <label htmlFor={label}>{label}</label>
            <input 
                autoComplete={autoComplete} 
                id={label} 
                value={value} 
                onChange={onChange} 
                maxLength={maxLength} 
                required={required} 
                type={type} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default TextField