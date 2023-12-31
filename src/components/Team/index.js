import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }
    
    return (
        (props.employeeList.length > 0) ?
        <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employeeList.map((employee, index) => 
                    <Employee
                        onClickFavorite={props.onClickFavorite}
                        onDeleteEmployee={props.onDeleteEmployee}
                        backgroundColor={props.primaryColor}
                        key={employee.id}
                        id={employee.id}
                        isFavorite={employee.isFavorite}  
                        name={employee.name} 
                        role={employee.role} 
                        photo={employee.photo} />
                )}
            </div>
        </section> : <></>
    )
}

export default Team