"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const Links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'projects',
        path: '/projects'
    },
    {
        name: 'contact',
        path: '/contact'
    }
]

const MobileNav = () => {
    const pathname = usePathname();
  return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-blue-500"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl"> LucasAnselmo044 </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {Links.map((link, index) => {
                    return <Link href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500"} "text-xl capitalize hover:text-blue-500 transition-all`}>
                                {link.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
}

export default MobileNav