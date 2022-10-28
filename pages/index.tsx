import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

async function TestAPI(): Promise<String> {
  let data: String = "NO DATA";
  
  let resp = await fetch('http://localhost:3000/api/test')
  let json = await resp.json()
  data = json.message
  return data;
}

export default async function Home() {
  const test = await TestAPI()

  // resolve test
  console.warn("test is", test);
 
  return (
    <div className={styles.container}>
      <Head>
        <title>M23-GC</title>
        <meta name="description" content="StrathSEDS Mach23 Competition Ground Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        {test}
      </p>
    </div>
  )
}
