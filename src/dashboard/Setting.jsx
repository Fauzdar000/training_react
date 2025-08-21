import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Setting = () => {
  return (
    <div>
        <h1>this is setting</h1>
          <nav>
                    <Link to='user'>user</Link>
                    <Link to='admin'>admin</Link>
                </nav>
                <Outlet/>
    </div>
  )
}

export default Setting;