import React from 'react'

const getQoute=async () => {
    const res = await fetch('https://api.quotable.io/random?tags=technology')
    const qoute = await res.json()
    return qoute
}

const page =async () => {
    const qoute = await getQoute()
  return (
    <>
    <h1>Server Static Qoute</h1>
    <div> {qoute.content} </div>
    </>

  )
}

export default page