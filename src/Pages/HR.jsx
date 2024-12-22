import { useState } from 'react';
import SideBarHr from '../Components/HR/SideBarHr';
import LeaveRequest from '../Components/HR/LeaveRequestHr';

const Employee = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    function tabToRender() {
        switch (activeTab) {
        case "accountInfo":
            return <div>account info</div>
        case "leaveRequest":
            return <LeaveRequest />;
            
        case "dashboard":
            return <div>Dashbored</div>
        case "Employees":
            return <div>Employees</div>
        case "AssignTasks":
            return <div>Assign Tasks</div>
        default:
            return <div>account info</div>
        }
    }
    console.log(activeTab);
    return (
        <div className="flex align-items-center justify-content-center  w-full space-between" >
          <SideBarHr setActiveTab={setActiveTab}/>
          <div className=" align-items-center justify-content-center w-full space-between">

            {tabToRender()}
          </div>
       
        
        </div>
    
        
    );
}

export default Employee