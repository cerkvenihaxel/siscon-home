import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div><header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">SISCON</span>
        </a>

      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">Global Medica S.A.</a>
      </nav>
      
      
    </div>
  </header></div>
  )
}
