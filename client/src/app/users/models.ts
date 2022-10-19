export interface LoginUser {
    email: String,
    password: String,
}

export interface User {
    _id: string,
    role: string,
    name: string,
    token: string,
}