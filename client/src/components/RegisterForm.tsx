import InputBox from './InputBox'
import { useState } from 'react'
import { API_URL } from '../config/env'

function RegisterForm() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const REGISTER_ENDPOINT = `${API_URL}/auth/register`

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const res = await fetch(REGISTER_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: login,
				email: email,
				password: password,
			}),
		})
		if (!res.ok) {
			console.error(res)
			return
		}
		const data = await res.json()
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit}>
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
			<div className="flex justify-center">
				<button
					type="submit"
					className="border border-taupe-200 mt-8 px-8 py-4 cursor-pointer text-2xl hover:text-[#242424] hover:bg-taupe-200 duration-100 ease-in">
					Register
				</button>
			</div>
		</form>
	)
}

export default RegisterForm
