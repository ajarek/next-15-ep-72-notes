"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { useNoteStore } from "@/store/notesStore"

const CheckNote = ({ text, color }: { text: string; color: string }) => {
  const router = useRouter()
  const { addItemToNote } = useNoteStore()
  const handleCheckNote = () => {
    const newNote = {
      id: Date.now(),
      title: text,
      text: text,
      color: color,
      date: new Date().toISOString(),
    }
    addItemToNote(newNote)
    router.push("/")
  }
  return (
    <Button
      onClick={handleCheckNote}
      size='icon'
      className='absolute right-1 top-1 rounded-full shadow-sm'
      aria-label="Close"
    >
      <Check />
    </Button>
  )
}

export default CheckNote
