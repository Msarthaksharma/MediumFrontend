import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:number
}

const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 max-w-screen cursor-pointer">
        <div className="flex">
            <div className="flex">
                <Avatar name={authorName}  /> 
            </div>
            <div className="font-extralight pl-2 text-sm justify-center flex-col">{authorName}</div>
            <div className="text-[8px] flex justify-center flex-col pl-2"> &#9679; </div>
            <div className="pl-2 font-thin text-slate-400 text-sm justify-center flex-col">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+ "...."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    </div>
    </Link>
  )
}

export function Avatar({name, size="small"}:{name:string , size?:"small" | "big"}){
    return(
    <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className="font-xs  text-gray-100 dark:text-gray-300 font-extralight">{name[0]}</span>
    </div>
    )
}

export default BlogCard