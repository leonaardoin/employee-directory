export default function EmployeeListItem({employee})
{
    return (

        <div className='employee-box'>
            <h4>{employee.name}</h4>
            <p>{employee.position}</p>
    </div>
    )
}