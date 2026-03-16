type HeaderProps = {
	content: string
}

function Header({ content }: HeaderProps) {
	return (
		<header className="text-center">
			<h1 className="text-taupe-200 font-bold text-5xl">
				{content}
			</h1>
		</header>
	)
}

export default Header