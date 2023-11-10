import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Team from './components/Team';

function App() {

  const teams = [
        {
          name: 'Computer programming',
          primaryColor: '#57C278',
          secondaryColor: '#D9F7E9',
        },
        {
          name: 'Front-End',
          primaryColor: '#82CFFA',
          secondaryColor: '#E8F8FF',
        },
        {
          name: 'Data Science',
          primaryColor: '#A6D157',
          secondaryColor: '#F0F8E2',
        },
        {
          name: 'Devops',
          primaryColor: '#E06B69',
          secondaryColor: '#FDE7E8',
        },
        {
          name: 'UX e Design',
          primaryColor: '#D86EBF',
          secondaryColor: '#FAE5F5',
        },
        {
          name: 'Mobile',
          primaryColor: '#FEBA05',
          secondaryColor: '#FFF5D9',
        },
        {
          name: 'Management',
          primaryColor: '#FF8A29',
          secondaryColor: '#FFEEDF',
        }
  ]

  const [employeeList, setEmployee] = useState([])

  const onEmployeeCreated = (employee) => {
    setEmployee([...employeeList, employee])

    console.log(employeeList)
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onCreated={employee => {
        onEmployeeCreated(employee)
      }} />
      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employeeList={employeeList.filter(employee => employee.team === team.name)}  />)}
    </div>
  );
}

export default App;
