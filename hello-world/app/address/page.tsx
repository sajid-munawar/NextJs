import Link from 'next/link'
import React from 'react'

export default function Address() {
  return (<>
    <h1 style={{ color: 'blue', lineHeight : 2, padding: 5 ,textAlign: "center"}} >Address</h1>
    <div style={{display:'flex', justifyContent:'space-around',paddingLeft:150 }}>
    <Link href='/'>Home</Link><br />
    <Link href='/student'>Student</Link><br />
    <Link href='/student/name'>Name</Link><br />
    <Link href='/student/city'>City</Link><br />
    </div>
    <h2>This is Address testing page</h2>
    {/* <div>{`The address in bar is ${params.test}`}</div> */}
    </>    
  )
}
