import axios from "axios";
import { Iuser, IuserFromDB, IuserLogin } from "../type/user";

class UserService {

    getUserById = (id: string) => {
        return (
            axios.get(`/users/${id}`)
                .then(user => {console.log("getUserById axios", user)
                    return user.data.user
                }).catch(err => {
                    console.log("getUserById axios failed", err)
                }))
    }

    registerService = (user: Iuser) => {
        return (
            axios.post('/register', user, { withCredentials: true })
                .then(data => {
                    console.log("post user axios", data, "and", data.data);
                    return data.data;
                }).catch(err => {
                    if (err.response.data.error != null)
                        return err.response.data.error;
                    else if (err.response.data.message != null)
                        return err.response.data.message;
                    console.log('post user axios failed', err.response)
                }))
    }

    loginService = (userLogin: IuserLogin) => {
        return (
            axios.post('/login', userLogin)
                .then(data => {
                    console.log("login axios", data, "and", data.data);
                    return data.data;
                }).catch(err => {
                    if (err.response.data.message)
                        return (err.response.data.message)
                    console.log("login axios failed", err)
                })
        )
    }

    updateUserService = (id: string, user: IuserFromDB) => {
        return (
            axios.put(`/users/${id}`, user)
                .then(data => {
                    console.log('update user axios', data, data.data);
                    return data;
                }).catch(err => {
                    console.log('update user axios failed', err)
                }))
    }

    deleteUserService = (id: string) => {
        return (
            axios.delete(`/users/${id}`)
                .then(data => {
                    console.log('delete user axios', data, data.data);
                    return data;
                }).catch(err => {
                    throw Error('delete user axios failed', err)
                }))
    }
}

export default new UserService()

