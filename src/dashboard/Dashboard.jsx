import React from 'react'
import {Link, Outlet} from 'react-router-dom';
 const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <Link to='Analysis'>Analysis</Link>
            <Link to='Settings'>Settings</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
export default Dashboard;
