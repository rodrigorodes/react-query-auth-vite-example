import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <LoginForm onSuccess={
            (data) => {
                console.log(data);
                navigate('/dashboard')
            }
        } />
    );
};
