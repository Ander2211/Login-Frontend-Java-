import AuthForm from '../components/AuthForm';
import { registerUser } from '../services/api';

const Register = () => {
  const handleRegister = async (userData) => {
    const user = await registerUser(userData);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;