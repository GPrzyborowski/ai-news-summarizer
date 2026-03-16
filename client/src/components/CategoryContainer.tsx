import { useState } from 'react'
import CategoryCheckbox from './CategoryCheckbox'

const categories = ['Sport', 'Geopolitics', 'Technology', 'Science', 'Art', 'Music'] as const

function CategoryContainer() {
	const [interests, setInterests] = useState<Record<string, boolean>>(
		categories.reduce((acc, cat) => ({ ...acc, [cat]: false }), {}),
	)

	const handleToggle = (categoryName: string) => {
		setInterests(prev => ({
			...prev,
			[categoryName]: !prev[categoryName],
		}))
	}

	return (
		<div className="mt-24 md:mt-32 px-4">
			<h2 className="text-center text-taupe-200 font-bold text-4xl mb-12">Pick your interests</h2>
			<div className="border-b px-12 py-6 mt-20 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 mx-auto max-w-fit">
				{categories.map(cat => (
					<div key={cat} className="w-40 md:w-48 flex justify-start">
						<CategoryCheckbox
							idFor={cat.toLowerCase()}
							labelContent={cat}
							checked={interests[cat]}
							onChange={() => handleToggle(cat)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default CategoryContainer
