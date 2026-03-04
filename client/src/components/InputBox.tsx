import type { ChangeEvent } from 'react'

type InputBoxProps = {
	htmlFor: string
	labelText: string
	type: string
	id: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputBox({ htmlFor, labelText, type, id, value, onChange }: InputBoxProps) {
	return (
		<div className="">
			<label htmlFor={htmlFor} className="block my-3 text-2xl">
				{labelText}
			</label>
			<input type={type} id={id} className="border border-taupe-200 p-2 text-2xl mb-10" value={value} onChange={onChange} />
		</div>
	)
}

export default InputBox
