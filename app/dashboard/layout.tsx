import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
  
        
          <div className="w-full max-w-7xl mx-auto flex bg-gradient-to-r from-slate-400 to-slate-200 ">
            <Sidebar/>
            {children}
          </div>
      
    
    );
  }