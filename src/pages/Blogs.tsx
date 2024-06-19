import Appbar from "../components.tsx/Appbar"
import BlogCard from "../components.tsx/BlogCard"
import BlogSkeleton from "../components.tsx/BlogSkeleton"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const  {loading,blogs} = useBlogs()
    if(loading || !blogs){
        return <div>
            <Appbar/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
         </div>
    }
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
        <div>
            {blogs.map( blog =>{ 
            return(<BlogCard key={blog.id}
            id={blog.id}
            authorName={blog.author.name || "Anonymous"} 
            title= {blog.title} 
            content={blog.content}
            publishedDate={"feb 2024"}/>  )}           
            )}
        </div>
    </div>
    </div>
  )
}

export default Blogs