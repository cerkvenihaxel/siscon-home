import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
  
    <div >
        <Head>
      <title>SISCON</title>
      <meta name="description" content="Sistema de gestión y control" />
      <link rel="icon" href="/sisconlogo.png" />
    </Head>
      <Hero />
      <Layout >
        <div className='bg-whiteflex flex-col justify-center items-center' >
   

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 className="text-7xl text-black font-bold tracking-tight sm:text-center sm:text-7xl">INGRESO OBRAS SOCIALES</h1>
      <p class="lg:w-2/3 mx-auto mt-12 leading-relaxed text-base">En los siguientes links podrá ingresar mediante su convenio a las distintas herramientas de SISCON.</p>
    </div>
    
  </div>
</section>
          <div className='flex -mt-24 mb-24 justify-center items-center altura' >
            <Link href="./protesis">
              <div className='sombreado border cursor-pointer rounded-2xl mx-4 w-44'>
                <div className='h-32 icono'>
                  <Image className="ml-7 mt-7" src="/ingreso.png" alt="Picture of the author" width={100} height={100} />
                </div>
                <h3 className='text-center border-t p-1 text-3xl'>
                  Acceso Prótesis
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}
