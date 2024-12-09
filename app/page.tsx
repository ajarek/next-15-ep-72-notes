import { Search } from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";


export default function Home() {
  return (
   <div className="w-full flex flex-col items-start justify-start min-h-screen px-4 gap-6">
    <div className="relative h-12 flex items-center justify-between w-full gap-4">
    <Search/>
    <Button>Login</Button>
    <SearchIcon className="absolute left-3" />
    </div>
    <h1 className="text-3xl ">Notes</h1>
   </div>
  );
}
