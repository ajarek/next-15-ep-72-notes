"use client"

import React from "react"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import { useNoteStore } from "@/store/notesStore"

const GetNotes = ({ query,user }: { query: string, user:string }) => {
  
  const {removeItemFromNote, items: notes} = useNoteStore()

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {notes ? (
        notes
          .filter((pd) => pd.user === user)
          .filter(
            (pd) =>
              !query || pd.text?.toLowerCase().includes(query.toLowerCase())
          )
          .sort((a, b) => b.date.localeCompare(a.date))
          .map(
            (
              note: { text: string; color: string; date: string; id: number },
              index: number
            ) => (
              <div
                className='relative flex  flex-col items-start justify-between  w-60 h-60 rounded-lg bg-slate-200 p-4 overflow-y-auto scrollbar'
                style={{ backgroundColor: note.color }}
                key={index}
              >
                <p className='text-xl'>{note.text}</p>
                <div className='w-full flex justify-between items-center  '>
                  <p className=''>{note.date.slice(0, 10)}</p>
                  <Button
                    size='icon'
                    variant={"destructive"}
                    className='rounded-full'
                    onClick={() => removeItemFromNote(note.id) }
                    aria-label="Close"
                  >
                    <X  />
                  </Button>
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
