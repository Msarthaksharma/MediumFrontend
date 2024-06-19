import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import FullBlog from "../components.tsx/FullBlog"
import BlogSkeleton from "../components.tsx/BlogSkeleton"
import Appbar from "../components.tsx/Appbar"

function Blog() {
  const {id} = useParams()
  const {loading,blog} = useBlog({id: id || ""})
  if(loading || !blog){
    return <div>
    <Appbar/>
    <BlogSkeleton/>
    </div>
  }
  return (
    <FullBlog blog={blog}/>
  )
} 

export default Blog