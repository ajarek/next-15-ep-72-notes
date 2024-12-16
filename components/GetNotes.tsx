"use client"

import React from "react"
import { X } from "lucide-react"
import { Notes } from "@/lib/models"
import Link from "next/link"

const GetNotes = ({ query,user, notes }: { query: string, user:string, notes:Notes[] }) => {
  
 

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {notes ? (
        notes
          .filter((pd) => pd.user === user)
          .filter(
            (pd) =>
              !query || pd.text?.toLowerCase().includes(query.toLowerCase())
          )
          // .sort((a, b) => b.createdAt.localeCompare(a.createdAt))    
          .map(
            (note:Notes) => 
              (
              <div
                className='relative flex  flex-col items-start justify-between  w-60 h-60 rounded-lg bg-slate-200 p-4 overflow-y-auto scrollbar'
                style={{ backgroundColor: note.color }}
                key={note._id}
              >
                <p className='text-xl'>{note.text}</p>
                <div className='w-full flex justify-between items-center  '>
                  <p className=''>{note.createdAt.toLocaleString()}</p>
                  <Link 
                   href={`/delete-note}`}
                   
                    className='rounded-full'
                   
                    aria-label="Close"
                  >
                    <X  />
                  </Link>
                </div>
              </div>
            )
          )
      ) : (
        <p className='text-center text-xl text-red-700'>No notes found</p>
      )}
    </div>
  )
}

export default GetNotes
