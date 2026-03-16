import InputBox from './InputBox'
import { API_URL } from '../config/env'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
	login: string
	setLogin: (val: string) => void
	password: string
	setPassword: (val: string) => void
	email: string
	setEmail: (val: string) => void
}

function RegisterForm({ login, setLogin, password, setPassword, email, setEmail }: Props) {
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const REGISTER_ENDPOINT = `${API_URL}/auth/register`

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (login.length < 3 || password.length < 8) return

		const res = await fetch(REGISTER_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: login,
				email: email,
				password: password,
			}),
		})
		if (!res.ok) {
			const text = await res.text()
			try {
				const data = JSON.parse(text)
				setError(data.message || 'Registration failed')
			} catch {
				setError(text || 'Registration failed')
			}
			return
		}
		navigate('/login')
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<div className="w-full max-w-xs">
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
			</div>

			<div className="flex justify-center">
				<button
					type="submit"
					className="border border-taupe-200 mt-8 px-8 py-4 cursor-pointer text-2xl hover:text-[#242424] hover:bg-taupe-200 duration-100 ease-in">
					Register
				</button>
			</div>
			<div className="flex justify-center mt-8">
				<p className="text-xl text-red-500">{error}</p>
			</div>
		</form>
	)
}

export default RegisterForm
