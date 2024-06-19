import { SignUpInput } from "@sarthak_sharma/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {BACKEND_URL} from '../config'
import toast from "react-hot-toast"


const Auth = ({type}:{type:"signup" | "signin"}) => {
  const navigate = useNavigate()
  const [postInputs,setPostInputs] = useState<SignUpInput>({
    name:"",
    username: "",
    password: ""
  })

  async function sendRequest(){
    try{
      const  response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`,postInputs)
      const jwt = response.data
      localStorage.setItem("token",jwt)
      toast.success('Authentication Successful')
      navigate("/blogs")
    }catch(e){
      toast.error('Something Went Wrong')
      console.log(e)
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
        <div className=" flex justify-center">
            <div>
                <div className="px-10">
                  <div className="text-3xl font-extrabold">
                      {type==="signup" ? "Create an Account" : "Welcome Back"}
                  </div>
                  <div className="text-slate-400">
                      {type === 'signin' ? "Don't have an account?" :"Already have an Account?" }
                    <Link className ="pl-2" to={type === 'signin' ? "/signup" :"/signin"}> {type === 'signin' ? "Signup" :"Login" }</Link>
                  </div>
                </div>
            <div className="pt-8">
            {type==="signup" ? <LabelledInput label="Name" placeholder="SarthakSharma " onChange=
            {(e) => {
              setPostInputs({
                ...postInputs,
                name:e.target.value  
              })
            }}/> : null}
            <LabelledInput label="Username" placeholder="abc@gmail.com" onChange={(e) => {
              setPostInputs({
                ...postInputs,
                username:e.target.value  
              })
            }}/>
            <LabelledInput label="Password" type="password" placeholder="Password" onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password:e.target.value  
              })
            }}/>
            <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signup" ? "Sign up" :"Sign in"}</button>
            </div>
        </div>
        </div>
    </div>
  ) 
}
export default Auth

interface LabelledInputType{
    label:string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type?:string
}


export function LabelledInput ({label, placeholder, onChange,type}:LabelledInputType) {
  return (
    <div>
        <div>
            <label className="block mb-2 text-sm text-black font-semibold">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} onChange={onChange} />
        </div>
    </div>
  )
}
