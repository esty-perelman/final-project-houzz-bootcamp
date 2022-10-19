import './formStyle.css'
import { useFormik } from "formik"
import { useNavigate } from "react-router"
import *as Yup from 'yup'
import userService from '../service/user.service'

export default function Register() {

    const navigate = useNavigate()

    const registerSubmit = () => {
        userService.registerService(registerFormik.values)
            .then((user) => {
                if (typeof user === 'string') {
                    alert(user)
                }
                else if (user) {
                    navigate("/")
                }
            }).catch(err => { throw err });
    }
    const registerValidate = Yup.object().shape({
        name: Yup.string().required('name field is required').matches(/^[a-z\u0590-\u05fe\s]+$/i, 'need letters'),
        email: Yup.string().required('email field is required').matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'need valid email'),
        password: Yup.string().required('password field is required').matches(/^[0-9]/, 'need number')
    })

    const registerFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            role: "user",
        },
        onSubmit: registerSubmit,
        validationSchema: registerValidate
    })


    return (
        <div className="wrapper">
            <div className="logo"> <img src="https://www.freepnglogos.com/uploads/logo-home-png/home-start-blue-logo-icon-0.png" alt="" /> </div>
            <div className="text-center mt-4 name">register</div>
            <form className="p-3 mt-3" onSubmit={registerFormik.handleSubmit}>

                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="name" id="name" placeholder="Name"
                    onChange={registerFormik.handleChange('name')} value={registerFormik.values.name} /> </div>
                {registerFormik.errors.name ? <div className="alert alert-primary d-flex align-items-center" role="alert"> {registerFormik.errors.name}</div> : ''}

                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="email" name="email" id="email" placeholder="Email"
                    onChange={registerFormik.handleChange} value={registerFormik.values.email} /> </div>
                {registerFormik.errors.email ? <div className="alert alert-primary d-flex align-items-center" role="alert"> {registerFormik.errors.email}</div> : ''}

                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password"
                    onChange={registerFormik.handleChange} value={registerFormik.values.password} /> </div>
                {registerFormik.errors.password ? <div className="alert alert-primary d-flex align-items-center" role="alert"> {registerFormik.errors.password}</div> : ''}

                <button type='submit' className="btn mt-3">Sign-Up</button>

            </form>
            <div className="text-center fs-6"> <a href="http://127.0.0.1:3000/login">Sign-In</a></div>
        </div>)
}
