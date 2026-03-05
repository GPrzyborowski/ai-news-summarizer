type CategoryCheckboxProps = {
	idFor: string
	labelContent: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function CategoryCheckbox({ idFor, labelContent, checked, onChange }: CategoryCheckboxProps) {
	return (
		<div className="flex items-center gap-3">
			<input
				type="checkbox"
				id={idFor}
				checked={checked}
				onChange={onChange}
				className="w-5 h-5 accent-taupe-200 cursor-pointer focus:ring-0"
			/>

			<label htmlFor={idFor} className="text-xl text-taupe-200 select-none cursor-pointer">
				{labelContent}
			</label>
		</div>
	)
}

export default CategoryCheckbox
