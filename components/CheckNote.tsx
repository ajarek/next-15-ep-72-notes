"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { useNoteStore } from "@/store/notesStore"

const CheckNote = ({ text, color, user }: { text: string; color: string; user: string }) => {
  const router = useRouter()
  const { addItemToNote } = useNoteStore()
  const handleCheckNote = () => {
    const newNote = {
      user: user,
      id: Date.now(),
      title: text,
      text: text,
      color: color,
      date: new Date().toISOString(),
    }
    addItemToNote(newNote)
    router.push("/dashboard")
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
