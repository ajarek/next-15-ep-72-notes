import CheckNote from "@/components/CheckNote";
import { Search } from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, PanelLeftClose, Search as SearchIcon } from "lucide-react";
import Link from "next/link";


export default function Home({searchParams}:{searchParams:{query?:string, color?:string,add?:string}}) {
  return (
   <div className="w-full flex flex-col items-start justify-start min-h-screen px-4 gap-6">
    <div className="relative h-12 flex items-center justify-between w-full gap-4">
    <Search/>
    <Button>Login</Button>
    <SearchIcon className="absolute left-3" />
    </div>
    <h1 className="text-3xl ">Notes</h1>
    <div className="flex flex-wrap gap-4">
    { searchParams.add ==='true' && (
      <div className="relative flex items-center  w-60 h-60 rounded-lg bg-slate-200" style={{backgroundColor:searchParams.color ?? 'bg-slate-200'}}>
        <Textarea  className="resize-none w-full h-full border-none shadow-md pr-10"  />
        <CheckNote text={'lolek'} color={searchParams.color ?? 'bg-slate-200'}/>
        <Link href='/' className='absolute right-1 bottom-1 rounded-full shadow-sm'><PanelLeftClose size={32}/></Link>
      </div>
    )}
    </div>
   </div>
  );
}
