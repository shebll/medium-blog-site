
import {getPosts} from "@/sanity/utils";
// import  {Post}  from '@/types/post' 
import Card from "@/components/Card";

async function Posts() {
  const posts = await getPosts() ;
  // console.log(posts)
  return (      
      <div className="container mx-auto py-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
        {posts.map(post =>(
            <Card key={post._id} post={post}  />            
        ))}
      </div> 
      
  )
}

export default Posts

