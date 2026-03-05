import InputBox from './InputBox'
import { useState } from 'react'

function LoginForm() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	return (
		<form action="">
			<InputBox
				htmlFor="login"
				labelText="Login"
				type="text"
				id="login"
				value={login}
				onChange={e => setLogin(e.target.value)}
			/>
			<InputBox
				htmlFor="password"
				labelText="Password"
				type="password"
				id="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<div className="flex justify-center">
				<button
					type="submit"
					className="border border-taupe-200 mt-6 px-8 py-4 cursor-pointer text-2xl hover:text-[#242424] hover:bg-taupe-200 duration-100 ease-in">
					Login
				</button>
			</div>
		</form>
	)
}

export default LoginForm
