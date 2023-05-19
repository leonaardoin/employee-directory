export default function EmployeeListItem({employee})
{
    return (

        <div className='employee-box'>
            <h4>{employee.name}</h4>
            <p>{employee.position}</p>

        <div className='employee-img'>
        <img src={employee.img} alt="Employee" width="75"/>
        </div>
    </div>
    )
}