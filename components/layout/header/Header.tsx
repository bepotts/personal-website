import Image from "next/image";

import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerContainer}>
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
