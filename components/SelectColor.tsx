'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface SelectColorProps {
  arrayColors: string[]
}

const SelectColor = ({arrayColors}: SelectColorProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
 
  const handleColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      const color = e.target.style.backgroundColor
      const params = new URLSearchParams(searchParams)
      if (color) {
        params.set("color", color)
      } else {
        params.delete("color")
      }
      replace(`${pathname}?${params.toString()}`)
    }
  }
 

  return (
    <div className='flex flex-col gap-3'>
     {arrayColors.map((color:string)=>{
        return( 
        <button onClick={handleColors} key={color} className='w-8 h-8 rounded-full' style={{backgroundColor:color}}></button>
      )
      })}
    </div>
  )
}

export default SelectColor