"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <nav className="flex gap-8"> 
        {Links.map((link, index) => {
            return (
                <Link href = {link.path} key={index} className={`${link.path === pathname && "text-blue-600 border-b-2 border-blue-600"} capitalize font-medium hover:text-blue-600 transition-all`}>{link.name}</Link>);
  })}
    </nav>
  );
};


export default Nav;