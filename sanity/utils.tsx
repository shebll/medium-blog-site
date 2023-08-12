import {createClient, groq} from "next-sanity"
import { Post } from "@/types/post";
  

/* fetching data using groq all projects */
async function getPosts() : Promise<Post[]> {
  return createClient({
    apiVersion: `1`,
    projectId: 'za534iy9',
    dataset: "production"
  }).fetch(groq `*[_type=="post"]
    {
      _id,
      _createdAt,
      title,    
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,    
      author-> {
        name,
        "authorImage": image.asset->url,
      },
      body,
      description
    }`,{caches:"no-cache"})
}

async function getPost(slug :string) : Promise<Post> {
  return createClient({
    apiVersion: `1`,
    projectId: 'za534iy9',
    dataset: "production"
  }).fetch( 
    groq`*[_type=="post" && slug.current==$slug][0]
    {
      _id,
      _createdAt,
      title,    
      "slug": slug.current,
      "image": mainImage.asset->url,  
      "comments": *[
        _type =="comment" && 
        post._ref == ^._id &&
        approve == true
      ],
      author-> {
        name,
        "authorImage": image.asset->url,
      },
      body,
      description
    }`,
    {
      caches:"no-cache",
      slug,
      // headers: {slug :slug},
    }
  );
}
export {getPosts ,getPost} 