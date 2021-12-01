import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

export default function FirstPost() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
