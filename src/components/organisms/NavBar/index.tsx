export default function Header() {
    return (
        <header className="w-full border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-bold italic text-sky-600">
                        Logo
                    </a>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="/" className="text-sm font-medium">
                        Home
                    </a>
                    <a href="/about" className="text-sm font-medium">
                        About Us
                    </a>
                    <a href="/features" className="text-sm font-medium">
                        Features
                    </a>
                    <div className="relative group">
                        <button className="flex items-center text-sm font-medium">
                            Support
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
