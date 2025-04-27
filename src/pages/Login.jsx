import AuthForm from '../components/AuthForm';
import { loginUser } from '../services/api';

const Login = () => {
  const handleLogin = async (credentials) => {
    const user = await loginUser(credentials);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;