import React from 'react'
import { Button } from './ui/button'
import { Plus, NotebookPen } from 'lucide-react'

const Sidebar = () => {
  return (
    <nav className="w-[120px] h-screen p-2 border-r-2 flex flex-col items-center gap-8">
     <h1 className="text-xl  flex items-center gap-2">Jan <NotebookPen /></h1>
     <Button size="icon" className='rounded-full'><Plus /></Button>
    </nav>
  )
}

export default Sidebar