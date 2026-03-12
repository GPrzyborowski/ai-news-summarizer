import { useState } from 'react'
import UpperContainer from '../components/UpperContainer'
import RegisterForm from '../components/RegisterForm'

function Register() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

	const validateUsername = (username: string) => /^[a-zA-Z0-9._]+$/.test(username)

	const isEmailValid = validateEmail(email)
	const isPasswordValid = password.length >= 8 && password.length <= 100
	const isLoginValid = login.length >= 3 && login.length <= 20 && validateUsername(login)

	return (
		<div className="min-h-screen flex flex-col">
			<UpperContainer title="Register new account" />
			<div className="mt-16 flex justify-center text-xl">
				<ul className="list-disc">
					<li>
						<div className="flex items-center gap-2">
							<span>Email is required</span>
							<img src="/check.svg" alt="" className={`w-5 h-5 ${isEmailValid ? 'visible' : 'invisible'}`} />
						</div>
					</li>
					<li>
						<div className="flex items-center gap-2">
							<span>Username must be between 3 and 20 characters</span>
							<img src="/check.svg" alt="" className={`w-5 h-5 ${isLoginValid ? 'visible' : 'invisible'}`} />
						</div>
					</li>
					<li>
						<div className="flex items-center gap-2">
							<span>Password must be between 8 and 100 characters</span>
							<img src="/check.svg" alt="" className={`w-5 h-5 ${isPasswordValid ? 'visible' : 'invisible'}`} />
						</div>
					</li>
				</ul>
			</div>
			<div className="flex justify-center mt-10 px-6">
				<div className="w-full max-w-md flex justify-center">
					<RegisterForm
						login={login}
						setLogin={setLogin}
						password={password}
						setPassword={setPassword}
						email={email}
						setEmail={setEmail}
					/>
				</div>
			</div>
		</div>
	)
}

export default Register
