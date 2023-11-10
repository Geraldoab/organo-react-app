import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }
    
    return (
        (props.employeeList.length > 0) ?
        <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employeeList.map(employee => 
                    <Employee
                        backgroundColor={props.primaryColor}
                        key={employee.name} 
                        name={employee.name} 
                        role={employee.role} 
                        photo={employee.photo} />
                )}
            </div>
        </section> : <></>
    )
}

export default Team