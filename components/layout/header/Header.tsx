import Image from "next/image";

import './header.css'

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <Image
                src="/bp-logo.svg"
                alt="BP logo"
                width={100}
                height={20}
                />
            </div>
            <p>This is a header</p>
        </header>
    )
}

export default Header
