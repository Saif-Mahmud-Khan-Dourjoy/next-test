import Link from "next/link";


export default function Navbar() {
    return (
        <div className="p-10 flex justify-center gap-8 w-full bg-black text-blue-500">
            <div>

            
            <Link
                href='/'
                className={`text-white `}
            >
                Home
            </Link>
            </div>
            <div>
            <Link
                href='/blog'
                className={`text-white `}
            >
                Blog
            </Link>
            </div>
            <div>
            <Link
                href='/video'
                className={`text-white `}
            >
                Video
            </Link>
            </div>
            <div>
            <Link
                href='/video/videos'
                className={`text-white `}
            >
                All Videos
            </Link>
            </div>

        </div>
    )
}
