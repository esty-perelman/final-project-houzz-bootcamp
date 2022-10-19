import Cookies from "js-cookie";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userService from "../service/user.service";


export default function DeleteProfile(){

    const nav = useNavigate();
    const [isDisabled, setDisabled] = useState(false);


    const handlerDeleteProfile = () => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 10000);
        userService.deleteUserService(Cookies.get("id") as string)
        .then((data) => {
             nav('/toast', {state: {message:"User profile deleted successfully", navigateAfter:"/register" }})
            })    
    } 

    return(
        <div className='container'>
            <h1 style={{margin:'30px'}}>Log out of your account</h1>
            <section>
                <h2>{Cookies.get("name")}</h2>
                <img width={'150px'} src="https://as2.ftcdn.net/v2/jpg/00/79/05/79/1000_F_79057904_WLTgouvy0s4qEAnEHYhq472wLLpnxN8K.jpg" alt =' ' />
            </section>
            <form className="d-grid" style={{width:'17rem', margin:'auto', }}>
            <Button disabled={isDisabled} size="lg" type="submit" onClick={handlerDeleteProfile}>Log out</Button>
            </form>
        </div>
    )
}