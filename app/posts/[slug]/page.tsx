import Post from "@/components/Post";
import { getPost } from "@/sanity/utils"
type props ={
  params : {slug:string}
}
async function page({params} :props) {
  // console.log(params.slug);
  const slug =params.slug
  const post = await getPost(slug) ;
  // console.log(post);
  return (
    <div>
    <Post post={post}/>    
    </div>
  )
}

export default page



// getStaticPaths (isr) 
// export const getStaticPaths : GetStaticPaths=async ()=>{
//   const query= `*[_type=="post"]
//   {
//     _id,
//     _createdAt,
//     title,    
//     "slug": slug.current,
//     "image": mainImage.asset->url,   
//     author-> {
//       name,
//       "authorImage": image.asset->url,
//     },
//     body,
//     description
//   }`;

//   const posts :Post[] =await createClient(Config).fetch(query)

//   const paths =posts.map((post) =>({
//     params :{
//       slug:post.slug
//     }
//   }))

//   return{
//     paths,
//     fallback:"blocking"
//   };
// };
// export const getStaticProps:GetServerSideProps =async ({params})=>{

//   // const query= ;

//   const post :Post =await createClient(Config).fetch(`*[_type=="post" && slug=$slug][0]
//   {
//     _id,
//     _createdAt,
//     title,    
//     "slug": slug.current,
//     "image": mainImage.asset->url,   
//     author-> {
//       name,
//       "authorImage": image.asset->url,
//     },
//     body,
//     description
//   }` ,{slug: params?.slug});
//   if(!post){
//     return{
//       notFound:true
//     };
//   };
//   return{
//     props:{
//       post,    
//     }
//   };
// }