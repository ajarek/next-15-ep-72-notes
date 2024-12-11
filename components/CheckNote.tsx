"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Check } from "lucide-react"


const CheckNote = ({ text, color }: { text: string; color: string }) => {
  const storage = localStorage.getItem("notes")
  const router = useRouter()
  
  const handleCheckNote = () => {
    const newNote = {
      text: text,
      color: color,
      date: new Date().toISOString(),
    }
    if (storage) {
      const notes = JSON.parse(storage)
      notes.push(newNote)
      localStorage.setItem("notes", JSON.stringify(notes))
      router.push("/")
      return
    }
    localStorage.setItem("notes", JSON.stringify([newNote]))
    router.push("/")
  }
  return (
    <Button
      onClick={handleCheckNote}
      size='icon'
      className='absolute right-1 top-1 rounded-full shadow-sm'
    >
      <Check />
    </Button>
  )
}

export default CheckNote
