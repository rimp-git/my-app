import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Appoinment",
            //icon:<AiFillCalendar/>
        },
        {
            path:"/Payment",
            name:"Payment",
            //icon:<MdPayments/>
        },
        {
            path:"/ReferandEarn",
            name:"ReferandEarn",
           // icon:<VscReferences/>
        },
        {
            path:"/Settings",
            name:"Settings",
            //icon:<CiSettings/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                <h1> this is </h1>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                
                   </div>
               </div>
               
                  
                
            </div>
        
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;