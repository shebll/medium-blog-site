import { PortableTextBlock } from "sanity"

export type Post = {
  _id:string,
  title:string,
  description:string,
  slug:string,
  body: PortableTextBlock[] ,
  image:string,
  _createdAt:Date,
  comments:Comment[],
  author:{
    name:string ,
    authorImage:string,
  }
}
export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post:{
  _ref: string;
  _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  type: string;
  _updatedAt: string;
}