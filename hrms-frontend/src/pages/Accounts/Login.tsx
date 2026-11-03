import React from 'react'
import { useDispatch } from "react-redux";
import {jwtDecode} from 'jwt-decode'; 
import { adminLogin } from '../../Store/Slice/authSlice';
import './login.css'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { Field, Form, Formik } from 'formik';
import FormikInput from '../../Shared/formik-fields/FormikInput';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import type { ILoginRequestModel } from '../../Model/account/accountM';
import { useMutation } from '@tanstack/react-query';
import accountService from '../../Services/account-service';
import { toast } from 'react-toastify';

const showHidePassword = (show: boolean, handleShowPassword: (show: boolean) => void) => (
    <IconButton
        title={show ? "Hide" : "Show"}
        aria-label="toggle password visibility"
        onClick={() => handleShowPassword(!show)}
        edge="end"
        style={{ color: "white" }}
    >
        {show ? <FaEye /> : <FaEyeSlash />}
    </IconButton>
);
const Login = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = React.useCallback((show: boolean) => {
        setShowPassword(show);
    }, []);

    const loginMutation = useMutation({
        mutationFn: accountService.loginUser,
        onSuccess: (response) => {
            if (!response?.data?.data?.token) {
                return;
            }
            const decode = jwtDecode(response?.data?.data?.token);
            const newResponse = { ...decode, ...response?.data?.data }
            if (response?.data?.status?.code) {
                dispatch(adminLogin(newResponse));
                toast.success(response?.data?.status?.message);
                // permissionMutation.mutate();
            }
        },
        onError: (error: Error) => { console.log(error?.message) },
    });

    const loginUser = (values: ILoginRequestModel) => loginMutation.mutate(values);
    return (
        <>

            <section className="login-form-container">
                <div className="left-part">
                    <div className="pragetx-logo">
                        {/* <img src={pragetx} alt="logo" /> */}
                    </div>
                    <div className="left-part-bg"></div>
                    <div className="left-part-project-content">
                        <div className="project-name">
                            <p className="project-name-word">Human</p>
                            <p className="project-name-word">Resource</p>
                            <p className="project-name-word">Management</p>
                            <p className="project-name-word">System</p>
                        </div>
                        <p className="project-description">Streamlining HR, Empowering Teams!</p>
                    </div>
                </div>

                <div className="right-part">

                    <div className="login-form">
                        <div className="right-part-bg" style={{ color: "white" }}>
                            <p>
                                LOGIN CREDENTIALS: <br />
                                Email:john.doe@example.com <br />
                                Password: Test@123
                            </p>
                        </div>
                        <h1>
                            <span className="welcome">Welcome <BsEmojiSmileUpsideDown /></span>
                        </h1>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                loginUser(values);
                            }}
                        >
                            {({ values, handleChange, handleSubmit }) => (
                                <Form className="l-form" onSubmit={handleSubmit}>
                                    <Field
                                        placeholder="Email"
                                        type="string"
                                        name="email"
                                        id="userName"
                                        component={FormikInput}
                                        className="login-page-fields email-field"
                                    />
                                    <Field
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        endAdornment={
                                            <InputAdornment position="end" >
                                                {showPassword
                                                    ? showHidePassword(true, handleShowPassword)
                                                    : showHidePassword(false, handleShowPassword)}
                                            </InputAdornment>
                                        }
                                        component={FormikInput}
                                        className="login-page-fields password-field"
                                    />
                                    {/* <div className="forgot-password">
                                        <Link to={Routing?.ForgotPassword}>Forgot Your Password?</Link>
                                    </div> */}
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        type="submit"
                                        sx={{ width: "100%" }}
                                        // disabled={loginMutation.isPending}
                                    >
                                        Sign In
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login