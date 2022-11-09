import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <div >
      <Layout >
        <div className='flex flex-col justify-center items-center' >
          <h1 className='text-8xl font-medium text-white mt-10'>SISCON</h1>
          <div className='flex justify-center items-center altura' >
            <Link href="./protesis">
              <div className='sombreado border cursor-pointer rounded-2xl mx-4 w-44'>
                <div className='h-32 icono'>
                  icono
                </div>
                <h3 className='text-center border-t p-1 text-3xl'>
                  Prótesis
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
