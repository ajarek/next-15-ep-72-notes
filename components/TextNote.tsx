'use client'

import { useDebouncedCallback } from "use-debounce"
import React from 'react'
import { Textarea } from './ui/textarea'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const TextNote = () => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()
   
    const handleText =  useDebouncedCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target instanceof HTMLTextAreaElement) {
        const text = e.target.value
        const params = new URLSearchParams(searchParams)
        if (text) {
          params.set("text", text)
        } else {
          params.delete("text")
        }
        replace(`${pathname}?${params.toString()}`)
      }
    },1000)
  return (
    <Textarea className='w-full h-full border-none text-xl shadow-md pr-10' placeholder='Write something...' defaultValue='' onChange={handleText} />
  )
}

export default TextNote