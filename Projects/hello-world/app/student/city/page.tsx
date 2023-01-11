import Link from 'next/link'
import React from 'react'

export default function City() {
  return (<>
    <h1 style={{ color: 'blue', lineHeight : 2, padding: 5 ,textAlign: "center"}} >City</h1>
    <div style={{display:'flex', justifyContent:'space-around',paddingLeft:150 }}>
    <Link href='/'>Home page</Link><br />
    <Link href='/student'>Student</Link><br />
    <Link href='/student/name'>Name</Link><br />
    </div>
    <h2>My city is Bahawalpur</h2>
    </>    
  )
}
