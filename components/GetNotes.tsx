"use client"
import React from "react"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import { fetchStorage, deleteStorageSingle } from "@/lib/localStorage"
import { useRouter } from "next/navigation"

const GetNotes = ({ query }: { query: string }) => {
  const router=useRouter()
  const notes = fetchStorage("notes") as {
    text: string
    color: string
    date: string
    id: number
  }[] || []

  return (
    <>
      {notes ? (
        notes
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
                    onClick={() => {deleteStorageSingle(note.id, "notes");router.push("/") }}
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
    </>
  )
}

export default GetNotes
