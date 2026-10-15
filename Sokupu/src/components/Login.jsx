import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login as authLogin} from '../features/authSlice';
import authService from '../appwrite/auth';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {Button,Input} from './index';
import Logo from './Logo';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if(session) {
                const userData = await authService.getCurrentUser();

                if(userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-[#FAF6F0] to-[#E7D6C1]">
            <div className="w-full max-w-md p-8 bg-[#FAF6F0] rounded-2xl shadow-lg">
                <div className="flex justify-center mb-6">
                    <span className="inline-block w-full max-w-\[100px]\">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit(login)} className="space-y-4">
                    <div className="space-y-5">
                        <Input 
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required : true,
                                validate: {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/
                                    .test(value) || 'Enter a valid email address',
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            {...register('password',{
                                required: true,
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                }
                            })}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}  
                        <Button type="submit" 
                            className="w-full bg-[#C48A5A] hover:bg-[#D29A6A] text-[#FAF6F0] font-semibold py-2 px-4 rounded-lg">
                            Login
                        </Button>
                        <p>
                            Don't have an account? 
                            <Link to="/Signup"
                                className="text-[#C48A5A] 
                                hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;