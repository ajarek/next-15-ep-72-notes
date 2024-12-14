import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <Link href={'/dashboard'}>
       <h1 className="text-3xl text-center font-semibold mb-4">Open Your Notes</h1>
       <div className="relative w-[200px] h-[200px]">
        <Image src={'/logo.png'} alt='logo' fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority />
      </div>
      </Link>
    </div>
  )
}
