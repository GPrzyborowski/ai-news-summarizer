import { Link } from "react-router-dom"
import { useState } from 'react'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="relative w-full">
			<div className="flex items-center justify-between h-40 px-4 xl:px-10">
				<div className="hidden xl:flex flex-1"></div>

				<div className="flex flex-1 justify-end items-center">
					<div className="hidden xl:flex gap-10 text-taupe-200 font-medium text-xs tracking-widest">
						<Link to="/" className="hover:text-white text-3xl transition-colors">
							Home
						</Link>
						<Link to="#" className="hover:text-white text-3xl transition-colors">
							Login
						</Link>
						<Link to="/register" className="hover:text-white text-3xl transition-colors">
							Register
						</Link>
					</div>

					<button
						className="xl:hidden text-taupe-200 text-4xl focus:outline-none z-50 p-2"
						onClick={() => setIsOpen(!isOpen)}>
						<img className="w-12" src={isOpen ? '/x.svg' : '/bars.svg'} alt="burger icon" />
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="fixed inset-0 bg-neutral-900 z-40 xl:hidden flex flex-col items-center justify-center space-y-8 text-taupe-200 animate-in fade-in zoom-in-95 duration-300">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Home
					</Link>
					<Link
						to="#"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Login
					</Link>
					<Link
						to="/register"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-light tracking-widest my-18 hover:text-white">
						Register
					</Link>
				</div>
			)}
		</nav>
	)
}

export default Navbar