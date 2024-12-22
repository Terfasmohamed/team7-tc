import { useState } from 'react';
import EmployeeProfile from '../Components/Employee/Employee_Dashboard/Employee_Dashboard';
import Sidebar from '../Components/Employee/Sidebar';
import LeaveRequest from '../Components/Employee/Leave_request/LeaveRequest'

const Employee = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    function tabToRender() {
        switch (activeTab) {
        case "accountInfo":
            return <div>account info</div>
        case "leaveRequest":
            return <LeaveRequest />;  
        case "dashboard":
            return <EmployeeProfile />;
        default:
            return <EmployeeProfile />;
        }
    }
    console.log(activeTab);
    return (
        <div className="flex align-items-center justify-content-center  w-full space-between" >
          <Sidebar setActiveTab={setActiveTab}/>
          <div className=" align-items-center justify-content-center w-full space-between">

            {tabToRender()}
          </div>
       
        
        </div>
    
        
    );
}

export default Employee