import type { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode
}

function Header({children}: HeaderProps) {
    return (
        <header>
            <h1 className="text-taupe-200 text-center font-bold text-5xl ">{children}</h1>
        </header>
    )
}

export default Header