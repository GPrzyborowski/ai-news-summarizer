import InputBox from './InputBox'
import { API_URL } from '../config/env'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const LOGIN_ENDPOINT = `${API_URL}/auth/login`

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const res = await fetch(LOGIN_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
		const data = await res.json()
		if (!res.ok) {
			console.log(data.message)
			return
		}
		localStorage.setItem('token', data.token)
		navigate('/')
	}

	return (
		<form onSubmit={handleSubmit}>
			<InputBox
				htmlFor="email"
				labelText="Email"
				type="text"
				id="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
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
