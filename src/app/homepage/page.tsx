import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'




const Homepage = () => {
  return (
    <div className='flex flex-col h-screen'>
        <h1 className='text-3xl font-bold text-center'>Homepage</h1>
        <p className='text-lg text-center'>This is the homepage</p>
    </div>
  )
}

export default Homepage