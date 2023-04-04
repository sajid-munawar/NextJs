'use client'
import React from 'react'
import useSWR from 'swr';

const url='https://api.quotable.io/random?tags=technology'

const fetcher = (url:string) => fetch(url).then((res) => res.json());

const ClientPage =() => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if(error) return <div>failed to load</div>
  if(isLoading) return <div>loading...</div>
  console.log(data);
  return (
    <>
    <h1>Client Page</h1>
    <h2> {data.content} </h2>
    </>

  )
}

export default ClientPage