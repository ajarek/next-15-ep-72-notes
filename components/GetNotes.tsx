"use client"

import React from "react"
import { NotesDatabase } from "@/lib/models"
import DeleteNote from "./DeleteNote"

const GetNotes = ({ query,user, notes }: { query: string, user:string, notes:NotesDatabase[] }) => {
  
 

  return (
    <>
      {notes ? (
        notes
          .filter((pd) => pd.user === user)
          .filter(
            (pd) =>
              !query || pd.text?.toLowerCase().includes(query.toLowerCase())
          )
           .sort((a, b) => b.createdAt.localeCompare(a.createdAt))    
          .map(
            (note:NotesDatabase) => 
              (
              <div
                className='relative flex  flex-col items-start justify-between  w-60 h-60 rounded-lg bg-slate-200 p-4 overflow-y-auto scrollbar'
                style={{ backgroundColor: note.color }}
                key={note._id}
              >
                <p className='text-xl'>{note.text}</p>
                <div className='w-full flex justify-between items-center  '>
                  <p className=''>{(note.createdAt.toLocaleString()).slice(0, 10)}</p>
                  <DeleteNote  _id={note._id} />
                </div>
              </div>
            )
          )
      ) : (
        <p className='text-center text-xl text-red-700'>No notes found</p>
      )}
    </>
  )
}

export default GetNotes
