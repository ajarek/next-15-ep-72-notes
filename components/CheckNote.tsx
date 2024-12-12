"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { saveStorage } from "@/lib/localStorage"


const CheckNote = ({ text, color }: { text: string; color: string }) => {
  const router = useRouter()
  const handleCheckNote = () => {
    const newNote = {
      id: Date.now(),
      text: text,
      color: color,
      date: new Date().toISOString(),
    }
    saveStorage(newNote, "notes")
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
