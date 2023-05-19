import EmployeeList from "./EmployeeList";

export default function SearchBar()
{
    return (
        <div className='search-bar'>
            <input type='text' placeholder='' name='search-bar'></input>
            <EmployeeList />
        </div>
    )
}