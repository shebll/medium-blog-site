import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default  function Home() {
  return (
    <main>      
      <Hero />   
      <Posts />
    </main>
  );
}


// try make (SSR) getServerSideProps 

// type props =  {
//   posts : Post[] ;
// }
// export async function getServerSideProps() : Promise<{
//   props: {
//       posts: Post[];
//   };
// }> {
  
//   // const query= `*[_type=="post"]
//   // {
//   //   _id,
//   //   _createdAt,
//   //   title,    
//   //   "slug": slug.current,
//   //   "image": mainImage.asset->url,   
//   //   author-> {
//   //     name,
//   //     "authorImage": image.asset->url,
//   //   },
//   //   body,
//   //   description
//   // }`;

//   // const client = createClient({
//   //   apiVersion: "2023/07/30",
//   //   projectId: 'za534iy9',
//   //   dataset: "production"
//   // });
// return { props: { posts :[] } }
// };

