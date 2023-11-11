import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar'; 
import Alert from '@mui/material/Alert'; 

function App() {

  const teams = [
        {
          id: uuidv4(),
          name: 'Computer programming',
          primaryColor: '#57C278',
          secondaryColor: '#D9F7E9',
        },
        {
          id: uuidv4(),
          name: 'Front-End',
          primaryColor: '#82CFFA',
          secondaryColor: '#E8F8FF',
        },
        {
          id: uuidv4(),
          name: 'Data Science',
          primaryColor: '#A6D157',
          secondaryColor: '#F0F8E2',
        },
        {
          id: uuidv4(),
          name: 'Devops',
          primaryColor: '#E06B69',
          secondaryColor: '#FDE7E8',
        },
        {
          id: uuidv4(),
          name: 'UX e Design',
          primaryColor: '#D86EBF',
          secondaryColor: '#FAE5F5',
        },
        {
          id: uuidv4(),
          name: 'Mobile',
          primaryColor: '#FEBA05',
          secondaryColor: '#FFF5D9',
        },
        {
          id: uuidv4(),
          name: 'Management',
          primaryColor: '#FF8A29',
          secondaryColor: '#FFEEDF',
        }
  ]

  const [employeeList, setEmployee] = useState([])
  const [teamList, setTeam] = useState(teams)

  const onEmployeeCreated = (employee) => {
    setEmployee([...employeeList, employee])

    console.log(employeeList)
  }

  const onTeamCreated = (team) => {
    const found = teamList.filter(t=> t.name.toLowerCase()===team.name.toLowerCase())
    if(found.length === 0) {
      setTeam([...teamList, team])
      console.log(teamList)
      onOpenSnackbarClickHandler('Saved!', 'success')
    }
    else {
      onOpenSnackbarClickHandler('Cannot save the Team because it already exists!', 'info')
    }
  }

  const deleteEmployee = (id) => {
    setEmployee(employeeList.filter(employee => employee.id !== id))
  }

  const [showSnackbar, setShowSnackbar] = useState(false); 
  const [snackBarMessage, setSnackBarMessage] = useState(false); 
  const [snackBarType, setSnackBarType] = useState('success'); 
  
  const onOpenSnackbarClickHandler = (message, type) => { 
      setShowSnackbar(true); 
      setSnackBarMessage(message)
      setSnackBarType(type)
  }; 

  const onCloseSnackbarClickHandler = (event) => { 
      setShowSnackbar(false); 
  }; 

  return (
    <div className="App">
      <Snackbar 
          open={showSnackbar} 
          onClose={onCloseSnackbarClickHandler}  
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert severity={snackBarType} sx={{ width: '100%' }}>
              {snackBarMessage}
          </Alert>
      </Snackbar>
      <Banner />
      <Form 
        teams={teamList.map(team => team.name)} 
        onCreated={employee => {
          onEmployeeCreated(employee)
        }}
        onTeamCreated={team => {
          onTeamCreated(team)
        }} 
      />
      {teamList.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          onDeleteEmployee={deleteEmployee}
          employeeList={employeeList.filter(employee => employee.team === team.name)}  />)}
    </div>
  );
}

export default App;
