import { useState } from "react"
import Header from "./Header"


const Login = () => {
    const [reg, SetReg] = useState(false);

    const HandleReg = ()=>{
        SetReg(!reg)
    }
  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_medium.jpg" alt="" />
        </div>
        <form className="absolute w-3/12 p-12 bg-black bg-opacity-90 my-36 mx-auto right-0 left-0 flex flex-col text-white">
        <h1 className="text-3xl py-4 font-bold">{reg ? "Sign Up" : "Sign In"}</h1>
            {reg && <><input type="text" placeholder="First Name" className="p-4 my-2 bg-gray-800 rounded-sm"/>
            <input type="text" placeholder="Last Name" className="p-4 my-2 bg-gray-800 rounded-sm"/></>}
            <input type="text" placeholder="Email Address" className="p-4 my-2 bg-gray-800 rounded-sm"/>
            <input type="password" placeholder="Password" className="p-4 my-2 bg-gray-800 rounded-sm"/>
            <button className="p-4 my-6 bg-red-700 rounded-sm">Sign In</button>
            <p className="py-4 hover:cursor-pointer" onClick={()=>{HandleReg()}}>{!reg ? "New to NetflixGPT ? Sign Up Now" : "Already SignUp ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login