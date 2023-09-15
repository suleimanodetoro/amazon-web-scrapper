import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <DocumentMagnifyingGlassIcon className='w-64 h-64 text-indigo-600/20'/>
      <h1 className='text-center text-3xl mt-2 text-black font-bold mb-5'>Welcome to my Amazon's Web Scrapper</h1>
      <h2 className='italic text-lg text-center text-black/50'>If you would like to go through more projects I've built, head over to my repository</h2>
      <h3 className='text-lg text-center italic text-black/50'>https://github.com/suleimanodetoro</h3>
    </div>
  )
}
