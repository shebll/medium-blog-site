import  SanityClient from "@sanity/client";
import { NextApiRequest ,NextApiResponse} from "next";

const config ={
  dataset : "production",
  projectId :'za534iy9' ,
  useCdn : true,
  token: "skOnA1YYrQBQdrS1I9igKSc4pq6CZtfFMUQTJvSvd9mRFOGiKrvEOH6A3voNZGTGHj95azrp3p5QWGOiJpmSSw5Uy53pPtfpWvQdpEKWsc4ypgRD8d69IcdXW4pKH2Rsdm0b0V5D3KATHrYZYOvDM59VHwg61p2kV4txMjXmrFawBxMiion6",
};

const client = SanityClient(config)
export default async function createComment(
  req: NextApiRequest ,
  res: NextApiResponse  
){
  const {_id , name , email ,comment}= JSON.parse(req.body);

  try{
    await client.create({
      _type:"comment",
      post:{
        _type:"reference",
        _ref :_id,

      },
      name,
      email,
      comment
    })
  } catch(error){
    console.log(error);
    return res.status(500).json({ message:"couldn't submit comment" ,error });
  }
  console.log("comment submitted");
  return res.status(200).json({ message:"comment submitted" });

}