import HeaderEmployee from "./HeaderEmployee";
import Data from '../utilities/Data'
import Information from '../utilities/EmployeeInformation'

export default function EmployeePage(props)
{
    return (
       
        <div className='employee-page'>

            <HeaderEmployee title='Employee' />
            {Data ?
            <div className='employee-page-container'>
                <h3>{Data[1].name}</h3>
                <p>{Data[1].position}</p>
                {Information ?
                    <div >
                        <div className='info'>
                        Call Office <br></br>
                        {Information.callOffice}
                        </div>
                        <div className='info'>
                        Call Mobile <br></br>
                        {Information.callMobile}
                        </div>
                        <div className='info'>
                        SMS <br></br>
                        {Information.SMS}
                        </div>
                        <div className='info'>
                        Email <br></br>
                        {Information.email}
                        </div>
                    </div>
                : <div></div>}
            </div>
            : <div></div>}
        </div>
    )
}