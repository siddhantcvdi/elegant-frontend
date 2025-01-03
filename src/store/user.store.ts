import { create } from "zustand";

interface User{
    id: string,
    displayName: string,
    email: string
}

interface Details{
    email: string,
    password: string
}

interface UserState{
    user: User,
    isAuthenticated: boolean,
    token: string,
    login: (details: Details)=>void,
    logout: (token: string)=>void
}

const useUserStore = create<UserState>((set)=>({
    user: {
        id: "",
        displayName: "",
        email: ""
    },
    isAuthenticated: false,
    token: "",
    login: (details)=>{},
    logout: (token)=>{}
}))

export {useUserStore}