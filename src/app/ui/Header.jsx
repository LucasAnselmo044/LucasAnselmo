import Link from "next/link"
import { Button } from "@/components/ui/button"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                { /* Logo */}
                <Link href="/">
                    <h1 className="text-4xl">
                        LucasAnselmo<span className="text-blue-500">044</span>
                    </h1>
                </Link>

                { /* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                { /* mobile nav */}
                <div className="xl:hidden ">
                    mobile nav
                </div>
            </div>
        </header>
    )
}

export default Header