import ButtonField from '../ButtonField'
import SelectField from '../SelectField'
import TextField from '../TextField'
import './Form.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MaterialPicker  } from 'react-color'
import Snackbar from '@mui/material/Snackbar'; 
import Alert from '@mui/material/Alert'; 

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamPrimaryColor, setTeamPrimaryColor] = useState('#F00F00')
    const [teamSecondaryColor, setTeamSecondaryColor] = useState('#F00F00')

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

        onOpenClickHandler()
    }

    const onSaveTeam = (event) => {
        event.preventDefault()
        props.onTeamCreated({
            id: uuidv4(),
            name: teamName,
            primaryColor: teamPrimaryColor,
            secondaryColor: teamSecondaryColor
        })

        setTeamPrimaryColor('#F00F00')
        setTeamSecondaryColor('#F00F00')
        setTeamName('')
    }

    const [showSnackbar, setShowSnackbar] = useState(false); 
  
    const onOpenClickHandler = () => { 
        setShowSnackbar(true); 
    }; 
  
    const onCloseClickHandler = (event) => { 
        setShowSnackbar(false); 
    }; 
    
    return (
        <section className="form">
            <Snackbar 
                open={showSnackbar} 
                onClose={onCloseClickHandler}  
                autoHideDuration={3000}
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
                <Alert severity='success' sx={{ width: '100%' }}>
                    Saved!
                </Alert>
            </Snackbar>

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
            <form onSubmit={onSaveTeam}>
                <h2>Please fill the form to add a new Team.</h2>
                <TextField
                     autoComplete='off'
                     value={teamName}
                     onType={value => setTeamName(value)}   
                     required={true} 
                     label="Team name" 
                     placeholder="Type the team name" />

                <label className='team-color'>Primary color</label>
                <MaterialPicker color={teamPrimaryColor} onChange={value => setTeamPrimaryColor(value.hex)} />
                <br />  

                <label className='team-color'>Secondary color</label>
                <MaterialPicker color={teamSecondaryColor} onChange={value => setTeamSecondaryColor(value.hex)} />
                <br />   

                <ButtonField>Add</ButtonField>
            </form>
        </section>
    )
}

export default Form