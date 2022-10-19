import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import userService from "../service/user.service";
import { IuserFromDB } from "../type/user";
import Cookies from "js-cookie";

export default function ManageProfile() {

    const nav = useNavigate();
   
    const [userState, setUserState]  = useState({name: '', email: '', password: '', role: ''} as IuserFromDB)
    const [isDisable, setDisabled] = useState(false);

    useEffect(() => {
        userService.getUserById(Cookies.get("id") as string)
            .then(user => {
                setUserState(user as unknown as IuserFromDB);
            })
    },)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name as any;
        setUserState({ ...userState, [name]: value });
    }

    const handlerChangeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 10000);
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            userService.updateUserService(Cookies.get("id") as string, userState)
                .then(() => nav('/toast', { state: { message: "user profile updated successfully", navigateAfter: "/" } }))
                .catch((err) => console.log(err))
        }
    }


    return (
        <div className="container" style={{ margin: 'auto' }}>
            <h1 style={{ fontSize: "20px", margin: '30px', }}>Manage Profile</h1>
            <div className='form-container' style={{ maxWidth: '30rem', margin: 'auto' }}>
                <Form onSubmit={handlerChangeSubmit} noValidate>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Full name</Form.Label>
                            <Form.Control type="text" defaultValue={userState.name} name="name" required
                                onChange={(event) => handleChange(event as any)}
                                isInvalid={!userState.name}
                            />
                            <Form.Control.Feedback type="invalid">invalid name.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    {/* <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                            <Form.Control type="number" defaultValue={userDetails.password} name="password" required
                                onChange={(event) => handleChange(event as any)}
                            />
                            <Form.Control.Feedback type="invalid">invalid age.</Form.Control.Feedback>
                        </Form.Group>
                    </div> */}
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicEmail">
                            <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                            <Form.Control type="email" defaultValue={userState.email} name="email" readOnly
                                onChange={(event) => handleChange(event as any)}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Role</Form.Label>
                            <Form.Control type="text" defaultValue={userState.role} name="role" readOnly
                                onChange={(event) => handleChange(event as any)}
                            />
                        </Form.Group>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Button disabled={isDisable} variant="primary" type="submit">Save profile changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

