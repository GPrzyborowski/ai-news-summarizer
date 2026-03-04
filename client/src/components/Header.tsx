import type { ReactNode } from "react"

type HeaderProps = {
  content: ReactNode
}

function Header({content}: HeaderProps) {
    return (
        <header>
            <h1 className="text-taupe-200 text-center font-bold text-5xl ">{content}</h1>
        </header>
    )
}

export default Header