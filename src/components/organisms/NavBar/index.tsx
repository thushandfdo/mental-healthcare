import { Button } from "@/components/atoms/Button"
import { Typography } from "@/components/atoms/Typography";

export const NavBar = () => {
    return (
       
            <nav className="hidden md:flex items-center space-x-6 w-full border-b border-gray-400 pl-3  pr-3 ">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold italic text-sky-600">
                            Logo
                        </a>
                    </div>
                    <div className="flex items-center gap-8">
                        <Typography label="Home" variant="p" />
                        <Typography label="About" variant="p" />
                        <Typography label="Features" variant="p" />
                        <Typography label="Contact" variant="p" />
                    </div>

                    <div className="relative group">
                        <Button label="Login" type="primary" onClick={() => (window.location.href = "/login")} />
                    </div>
                </div>
            </nav>
        
    )
}
