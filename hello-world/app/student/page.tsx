import Link from 'next/link'
import React from 'react'

export default function Student() {
  return (<>
    <h1 style={{ color: 'blue', lineHeight : 2, padding: 5 ,textAlign: "center"}} >Student</h1>
    <div style={{display:'flex', justifyContent:'space-around',paddingLeft:150 }}>
    <Link href='/'>Home page</Link><br />
    <Link href='/student/name'>Name</Link><br />
    <Link href='/student/city'>City</Link><br />
    </div>
    <h2>I'm a student of MWD(metaverse web development) program</h2>

    </>    
  )
}
