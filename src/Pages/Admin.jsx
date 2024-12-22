import { useState } from 'react';
import SideBarAD from '../Components/Admin/SideBarAD';

const Employee = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    function tabToRender() {
        switch (activeTab) {
        case "dashboard":
            return <div>Dashboard</div>
        case "createAccount":
            return <div>Create Account</div>
        default:
            return <div>Dashboard</div>
        }
    }
    console.log(activeTab);
    return (
        <div className="flex align-items-center justify-content-center  w-full space-between" >
          <SideBarAD setActiveTab={setActiveTab}/>
          <div className=" align-items-center justify-content-center w-full space-between">

            {tabToRender()}
          </div>
       
        
        </div>
    
        
    );
}

export default Employee