import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useUserStore } from "@/store/user.store"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useUserStore();
  return (
    <div className="w-full h-nonav flex justify-center items-center">
        <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
            <div className="flex flex-col gap-2">
            <p className="poppins-regular text-3xl text-neutral-700">Sign In</p>
            <div className="text-[12px] poppins-light flex gap-1">
            <p className=" text-neutral-500">Don't have an account yet?</p>
            <NavLink to={'/signup'} className={'text-emerald-400'}>Sign Up</NavLink>
            </div>
            </div>
            <input placeholder="Your email" className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
            onChange={(e)=>{
                setEmail(e.target.value)
            }
            }/>
            <input placeholder="Password" className="poppins-light text-sm p-2 rounded-md shadow-sm outline-none border-[1px] focus:border-black"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <Button className="w-full"
            onClick={()=>login({email, password})}>Sign In</Button>
        </div>
    </div>
  )
}

export default Login