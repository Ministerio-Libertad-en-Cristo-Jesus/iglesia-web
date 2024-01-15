import LoginBox from "../ui/login/LoginBox"
import PatternLeft from "../ui/login/PatternLeft"

const Login = () => {
  return (
    <main className="flex flex-col md:flex-row-reverse w-full min-h-screen">
      <PatternLeft />
      <LoginBox />

    </main>
  )
}
 
export default Login