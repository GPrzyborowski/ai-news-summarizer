import Navbar from '../components/Navbar'
import Header from '../components/Header'

type UpperContainerProps = {
	title: string
}

function UpperContainer({ title }: UpperContainerProps) {
	return (
		<div className="w-full">
			<Navbar />

			<div className="flex justify-center mt-4">
				<Header content={title} />
			</div>
		</div>
	)
}

export default UpperContainer