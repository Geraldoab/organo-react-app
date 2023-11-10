import ButtonField from '../ButtonField'
import SelectField from '../SelectField'
import TextField from '../TextField'
import './Form.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCreated({
            id: uuidv4(),
            name,
            role,
            photo,
            team
        })

        setName('')
        setRole('')
        setPhoto('')
        setTeam('')
    }
    
    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Please fill the form to add a new employee.</h2>
                <TextField
                     autoComplete='given-name'
                     value={name}
                     onType={value => setName(value)}   
                     required={true} 
                     label="Name" 
                     placeholder="Type the name" />
                <TextField
                    autoComplete='organization-title'
                    value={role}
                    onType={value => setRole(value)}    
                    required={true} 
                    label="Role" 
                    placeholder="Type the role" />
                <TextField
                    autoComplete='photo'
                    value={photo}
                    onType={value => setPhoto(value)}  
                    required={false}
                    label="Profile photo" 
                    placeholder="Type the photo's URL" />
                <SelectField
                    autoComplete='off'
                    value={team}
                    onChange={value => {                     
                        setTeam(value)
                    }}
                    required={true} 
                    label="Team" 
                    items={props.teams} />

                <ButtonField>Add</ButtonField>
            </form>
        </section>
    )
}

export default Form