import GetNotes from "@/components/GetNotes"
import { Search } from "@/components/Search"
import TextNote from "@/components/TextNote"
import { PanelLeftClose, Search as SearchIcon } from "lucide-react"
import Link from "next/link"
import { auth } from "@/app/api/auth/auth"
import { redirect } from "next/navigation"
import { Session } from "next-auth"
import Logout from "@/components/Logout"
import {getAllNotes} from "@/lib/action"

const Dashboard = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string
    color?: string
    add?: string
    text?: string
  }>
}) => {
  const session = await auth()
  const { user } = (session as Session) || {}

  if (!user) {
    redirect("/register")
  }

  const { query, color, add } = await searchParams
  const notes = await getAllNotes() 
  return (
    <div className='w-full flex flex-col items-start justify-start min-h-screen px-4 py-4 gap-6'>
      <div className='relative h-12 flex items-center justify-between w-full gap-4'>
        <Search />
        <Logout session={session} />
        <SearchIcon className='absolute left-3' />
      </div>
      <h1 className='text-3xl '>Notes</h1>
      <div className='w-full flex flex-wrap justify-center gap-4'>
        {add === "true" && (
          <div
            className='relative flex items-center  w-60 h-60 rounded-lg bg-slate-200 overflow-y-auto scrollbar'
            style={{ backgroundColor: color ?? "bg-slate-200" }}
          >
            <TextNote color={color ?? "bg-slate-200"} user={user?.name ?? ""} />

            <Link
              href='/dashboard'
              className='absolute right-1 bottom-1 rounded-full shadow-sm'
              aria-label='Close'
            >
              <PanelLeftClose size={32} />
            </Link>
          </div>
        )}
        <GetNotes query={query ?? ""} user={user?.name ?? ""} notes={JSON.parse(JSON.stringify(notes))} />
      </div>
    </div>
  )
}

export default Dashboard
