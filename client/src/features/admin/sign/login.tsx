import './formStyle.css'
import { useFormik } from "formik"
import { useNavigate } from "react-router"
import *as Yup from 'yup'
import userService from '../service/user.service'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

export default function Login() {

    const navigate = useNavigate()

    useEffect( () => {
        if(Cookies.get("id") !== undefined){
            navigate("/")
        }
    })

    const loginSubmit = () => {
        userService.loginService(loginFormik.values)
            .then(req => {
                if (typeof req === 'string') {
                   alert(req)
                }
                else if(req){
                    navigate('/');
                }
            })
    }

    const loginValidate = Yup.object().shape({
        email: Yup.string().required('email field is required').matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'need valid email'),
        password: Yup.string().required('password field is required').matches(/^[0-9]/, 'need number')
    })

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        onSubmit: loginSubmit,
        validationSchema: loginValidate
    })


    return (
        <div className="wrapper">
            <div className="logo"> <img src="https://www.freepnglogos.com/uploads/logo-home-png/home-start-blue-logo-icon-0.png" alt="" /> </div>
            <div className="text-center mt-4 name">login</div>
            <form className="p-3 mt-3" onSubmit={loginFormik.handleSubmit}>

                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="email" name="email" id="email" placeholder="Email"
                    onChange={loginFormik.handleChange} value={loginFormik.values.email} /> </div>
                {loginFormik.errors.email ? <div className="alert alert-primary d-flex align-items-center" role="alert"> {loginFormik.errors.email}</div> : ''}

                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"
                    onChange={loginFormik.handleChange} value={loginFormik.values.password} /> </div>
                {loginFormik.errors.password ? <div className="alert alert-primary d-flex align-items-center" role="alert"> {loginFormik.errors.password}</div> : ''}

                <div className="form-group"> <label htmlFor="remember">remember me</label><input type="checkbox" className="form-check-input" name="remember" id="remember"
                    onChange={loginFormik.handleChange}/></div>

                <button type='submit' className="btn mt-3">Sign-In</button>
            </form>
            <div className="text-center fs-6"> <a href="http://127.0.0.1:3000/register">Sign-Up</a></div>
        </div>)
}
