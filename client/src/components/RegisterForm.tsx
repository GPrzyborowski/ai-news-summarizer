import InputBox from './InputBox'
import { useState } from 'react'

function RegisterForm() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	return (
		<form action="">
			<InputBox
				htmlFor="email"
				labelText="Email"
				type="email"
				id="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
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
			<div className='flex justify-center'>
				<button type="submit" className="border border-taupe-200 mt-10 px-8 py-4 cursor-pointer text-2xl">
					Register
				</button>
			</div>
		</form>
	)
}

export default RegisterForm
