import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomePage from '@/src/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GPU Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/icons/logo-icon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
