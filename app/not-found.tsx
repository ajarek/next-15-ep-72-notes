"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full container min-h-screen flex flex-col items-center justify-center gap-4 p-4'>
      <Image src='/notfound.jpeg' alt='404' width={400} height={266} priority/>
      <h1 className='text-center text-xl font-semibold'>Page your are trying to access could not be found</h1>
      <p className='text-center'>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <div className=''>
        <Button
          onClick={() => { router.push("/dashboard") }}
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
