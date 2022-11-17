import React from 'react'
import Head from 'next/head'
import CreateModal from '../components/Modal'
import useSWR from 'swr'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { readSync } from 'fs'

const dataapi = "localhost:3000/api/test"

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    console.log("API> Error: " + res.statusText)
    const error = new Error(res.statusText);
    throw error;
  }

  return res.json();
}

function GetData(id: string) {
  const { data, error } = useSWR(`/api/data/${id}`, fetcher, { refreshInterval: 5, revalidateIfStale: false, dedupingInterval: 5 })
  return {
    returndata: data,
    isLoading: !error && !data,
    isError: error
  }
}

function ReturnAPITest() {
  const { returndata, isLoading, isError } = GetData("velocity")
  if (isError) return <div>failed to load </div>
  if (!returndata) return <div>loading...</div>
  return <div>{returndata.message}</div>
}

function MissionTimer(){
  const { returndata, isLoading, isError } = GetData("timer")
  if (isError) return <div>failed to load timer</div>
  if (!returndata) return <div>waiting for timer...</div>
  
}

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>M23-GC</title>
        <meta name="description" content="StrathSEDS Mach23 Competition Ground Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReturnAPITest />

      <div id="example"></div>
      <CreateModal></CreateModal>

    </div>
  )
}
