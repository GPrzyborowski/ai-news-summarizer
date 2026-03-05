import UpperContainer from '../components/UpperContainer'
import RegisterForm from '../components/RegisterForm'

function Register() {
	return (
		<div className="min-h-screen flex flex-col">
			<UpperContainer title="Register new account" />

			<div className="flex justify-center mt-56 px-6">
				<div className="w-full max-w-md flex justify-center">
					<RegisterForm />
				</div>
			</div>
		</div>
	)
}

export default Register