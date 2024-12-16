"use client"

import { Check } from "lucide-react"
import React from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { addNote } from "@/lib/action"
import type { Notes } from "@/lib/models"

const TextNote = ({ color, user }: { color: string; user: string }) => {
  return (
    <form
      action={async (formData: FormData) => {
        const noteData: Notes = {
          _id: '', // You might want to generate a unique ID here
          text: formData.get('text') as string,
          color: formData.get('color') as string,
          user: formData.get('user') as string,
          createdAt: new Date(), // Add current timestamp
        }
        await addNote(noteData)
      }}
      className='relative w-full h-full'
    >
      <input type='hidden' value={user} name='user' />

      <input type='hidden' value={color} name='color' />
      <Textarea
        className='w-full h-full border-none text-xl shadow-md pr-10'
        placeholder='Write something...'
        defaultValue=''
        name='text'
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
