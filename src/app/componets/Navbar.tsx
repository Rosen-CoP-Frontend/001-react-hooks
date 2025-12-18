import Image from "next/image"
import { use } from "react"
import { MyContext } from "../page"

export const Navbar = () => {
    const userEmail = use(MyContext)?.userEmail;

    return (
        <nav className="border-gray-200 bg-[#00458f] fixed top-0 left-0 w-full">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logo.png" width={30} height={30} className="h-8" alt="Rosen Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Frontend community</span>
                </a>
                <div className="hidden w-full sm:block sm:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0 sm:bg-transparent">
                        <li>
                            {userEmail}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}