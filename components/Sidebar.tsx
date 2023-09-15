import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Sidebar() {
  return (
    <div className='p-2 md:10 py-6 overflow-y-auto border-b border-indigo-500/50'>
        {/* side bar icon, header, and catchphrase */}
        <div className='flex flex-col items-center justify-center mb-10'>
            <DocumentMagnifyingGlassIcon className='h-16 md:w-16 text-indigo-600'/>
            <h1 className='hidden md:inline text-3xl mt-2'>Web Scrapper</h1>
            <h2 className='hhidden md:inline text-xs italic'>Cool catchphrase I couldn't come up with</h2>
        </div>
        <ul>
            {/* SideBar Row Item */}
            {/* SideBar Row Item */}
            {/* SideBar Row Item */}
            {/* SideBar Row Item */}

        </ul>
    </div>
  )
}

export default Sidebar