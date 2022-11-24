import React from 'react'
import Head from 'next/head'
import CreateModal from '../components/Modal'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { readSync } from 'fs'

import GetData from '../components/GetData'

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
      <Head>
        <title>M23-GC</title>
        <meta name="description" content="StrathSEDS Mach23 Competition Ground Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modal container */}
      <div id="modalcontainer"></div>

      {/* Header section and data init*/}
      <Header />

      {/* <ReturnAPITest /> */}


      {/* <CreateModal></CreateModal> */}
    </div>
  )
}
