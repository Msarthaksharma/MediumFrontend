import { ChangeEvent, useState } from "react"
import Appbar from "../components.tsx/Appbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {BACKEND_URL} from '../config'

const Publish = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center pt-8">
        <div className="max-w-screen-lg w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
        <input type="text" id="email" onChange={(e)=>{setTitle(e.target.value)}} className=" focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="title"/>
        <TextEditor onChange={(e)=>{setDescription(e.target.value)}} />
      <button className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800" type="submit" onClick={async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content:description
      },{
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      console.log(response)
      navigate(`/blog/${response.data.blogId}`)
    }}>
       Publish post
   </button>
        </div>
    </div>
    </div>
  )
}

function TextEditor({onChange}:{onChange:(e: ChangeEvent<HTMLTextAreaElement>)=> void}){
  return(
  <div className="mt-2">
    <div className="w-full mb-4">
       <div className="flex items-center justify-between border">
       <div className="my-2 bg-white rounded-b-lg w-full">
           <label className="sr-only">Publish post</label>
           <textarea id="editor" rows={8} onChange={onChange} className=" focus:outline-none block w-full px-0 text-md text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
   </div>
  </div>
  )
}

export default Publish