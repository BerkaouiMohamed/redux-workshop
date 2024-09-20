import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {
    const order=useSelector(state=>state.orderState)
  return (
    <div className='navbar'>
        <h2>logo</h2>
        <div>
            <Link to={"/"}><p>home</p></Link>
            <Link to={"/admin"}><p>admin</p></Link>

           {order.length? <Link to={"/cart"}><p>cart</p></Link>:null}

        </div>
    </div>
  )
}

export default Navbar