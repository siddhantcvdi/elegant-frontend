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
    token: "",
    login: async (details)=>{
        const url = 'http://localhost:3001/api/v1/users/login'
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details)
            });
            const result = await response.json();
            console.log(result);
            return set(()=>({token: result.data.accessToken}))
        }catch(err: any){
            console.log('Error');
        }
    },
    logout: (token)=>{}
}))

export {useUserStore}