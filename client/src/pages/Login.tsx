import UpperContainer from '../components/UpperContainer'
import LoginForm from '../components/LoginForm'

function Login() {
	return (
		<>
			<UpperContainer title={'Login to your account'} />
			<div className="flex justify-center mt-70 px-6">
				<div className="w-full max-w-md flex justify-center">
					<LoginForm />
				</div>
			</div>
		</>
	)
}

export default Login
