import React from 'react'

function AdminBox({order}) {
    const qunatity=order.order.reduce((a,prod)=>{return a+=prod.quantity},0)
  return (
    <div className='admin'>
        <h3>{order.id}</h3>
        <p>{order.user.name}</p>
        <p>{qunatity} </p>
        <h3>{order.status}</h3>
    </div>
  )
}

export default AdminBox