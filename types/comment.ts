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