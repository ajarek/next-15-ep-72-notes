'use client'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { useState } from 'react'

const CheckNote = ({text,color}:{text:string,color:string}) => {
    const router = useRouter()
    const [notes, setNotes] = useState<{text: string, color: string}[]>([]);
    const handleCheckNote =()=>{
        const newNote={
            text:text,
            color:color
       } 
           setNotes([...notes,newNote])
           localStorage.setItem('notes',JSON.stringify(notes))
            router.push('/')
    }
  return (
    <Button onClick={handleCheckNote} size="icon" className='absolute right-1 top-1 rounded-full shadow-sm'><Check /></Button>
  )
}

export default CheckNote