import React from 'react'
import {  NotebookPen, Plus } from 'lucide-react'
import SelectColor from './SelectColor'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { Session } from "next-auth"
import { auth } from "@/app/api/auth/auth"

const arrayColors=["#fb923c", "#2ef7a4", "#fcd34d", "#7dd3fc", "#c4b5fd", "#5eead4","#e2e8f0"]

const Sidebar = async() => {
  const session = await auth()
  const { user } = (session as Session) || {}
  return (
    <nav className="w-[120px] h-screen p-2 border-r-2 flex flex-col items-center gap-8">
     <h1 className="text-xl  flex items-center gap-2 capitalize">{user?.name} <NotebookPen /></h1>
   
     <Link href={`/dashboard?add=true`}  className={`${buttonVariants({
        variant: "default",
        size: "icon",
        
      })} rounded-[50%] shadow-sm`} 
      aria-label="Add Note" 
      ><Plus /></Link>
      <SelectColor arrayColors={arrayColors} />
    


    </nav>
  )
}

export default Sidebar