"use client"

import { Check } from "lucide-react"
import React from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { addNote } from "@/lib/action"
import type { Notes } from "@/lib/models"
import { useRouter } from "next/navigation"

const TextNote = ({ color, user }: { color: string; user: string }) => {
  const router = useRouter()
  return (
    <form
      action={async (formData: FormData) => {
        const noteData: Notes = {
          text: formData.get("text") as string,
          color: formData.get("color") as string,
          user: formData.get("user") as string,
        }
        await addNote(noteData)
        router.push("/dashboard?add=false")
      }}
      className='relative w-full h-full '
    >
      <input type='hidden' value={user} name='user' />

      <input type='hidden' value={color} name='color' />
      <Textarea
        className='w-full h-full border-none text-xl shadow-md pr-10'
        placeholder='Write something...'
        defaultValue=''
        name='text'
        autoFocus
      />
      <Button
        type='submit'
        size='icon'
        className='absolute right-1 top-1 rounded-full shadow-sm'
        aria-label='Close'
      >
        <Check />
      </Button>
    </form>
  )
}

export default TextNote
