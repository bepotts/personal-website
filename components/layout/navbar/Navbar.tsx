import Image from "next/image";

import './navbar.css'

function Navbar() {
    return (
        <nav>
            {/* <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
            /> */}

            <Image
            src="/bp-logo.svg"
            alt="BP logo"
            width={100}
            height={20}
            />
            <p>This is a navbar</p>
        </nav>
    )
}

export default Navbar
