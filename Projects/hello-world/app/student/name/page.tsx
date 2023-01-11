import Link from 'next/link'
import React from 'react'

export default function Name() {
  return (<>
    <h1 style={{ color: 'blue', lineHeight : 2, padding: 5 ,textAlign: "center"}} >Sajid</h1>
    <div style={{display:'flex', justifyContent:'space-around',paddingLeft:150 }}>
    <Link href='/'>Home page</Link><br />
    <Link href='/student'>Student</Link><br />
    <Link href='/student/city'>City</Link><br />
    </div>
    <h2>My name is Sajid Munawar</h2>

    </>    
  )
}
