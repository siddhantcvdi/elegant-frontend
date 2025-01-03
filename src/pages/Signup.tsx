import { NavLink } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const Signup = () => {
  return (
    <div className="w-full h-nonav flex justify-center items-center">
        <div className="bg-white sm:bg-neutral-50 h-full w-full sm:h-fit sm:w-[400px] rounded-2xl p-6 flex flex-col gap-8 sm:-mt-16">
            <div className="flex flex-col gap-2">
            <p className="poppins-regular text-3xl text-neutral-700">Sign Up</p>
            <div className="text-[12px]  poppins-light flex gap-1">
            <p className=" text-neutral-500">Already have an account?</p>
            <NavLink to={'/login'} className={'text-emerald-400'}>Sign in</NavLink>
            </div>
            </div>
            <Input placeholder="Your Name"/>
            <Input placeholder="Your email"/>
            <Input placeholder="Password" type="password"/>
            <Input placeholder="Confirm Password" type="password"/>
            <Button className="w-full">Sign Up</Button>
        </div>
    </div>
  )
}

export default Signup