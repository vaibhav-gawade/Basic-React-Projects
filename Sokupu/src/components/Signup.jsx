import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Button,Input} from './index';
import {login} from '../features/authSlice';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import Logo from './Logo';

function Signup () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");

    // we make this method and pass it or give it to the form so that form can be able take the data from the user and the user data i.e the password and all can be given to the createAccount so that the new account is created
    const signUp = async (data) => {
        setError("");
        try {
            const newAccount = await authService.createAccount( {
                password : data.password,
                email : data.email,
                name : data.name
            });

            if(newAccount) {
                const newUser = await authService.getCurrentUser(newAccount);
                if(newUser) dispatch(login(newUser));
                navigate("/");
            }
        } catch(error) {
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
                <h2 className="text-2xl font-bold mb-6 text-center">Sign up to start exploring...</h2>
                <form onSubmit={handleSubmit(signUp)}>
                    <div className="space-y-5">
                        <Input 
                            label="Email"
                            type="email"
                            placeholder="Enter you email"     
                            {...register('email', {
                                required : true,
                                validate : {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/
                                    .test(value) || 'Enter a valid email address',
                                }
                            })}                   
                        />
                        <Input 
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password',{
                                required: true,
                                minLength: 6,
                                message : "password should be atleast of length 6"
                            })}
                        />
                        <Input 
                            label="Username"
                            type="text"
                            placeholder="Enter username"
                            {...register('name',{
                                required: true,
                            })}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}  
                        <Button type="submit" 
                                className="w-full bg-[#C48A5A] hover:bg-[#D29A6A] text-[#FAF6F0] font-semibold py-2 px-4 rounded-lg">
                                        Sign up
                        </Button>
                        <p>
                        Already have an account? 
                        <Link to="/Login"
                            className="text-[#C48A5A] 
                            hover:underline">
                                Login
                        </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;