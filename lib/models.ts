import { create } from "domain"
import mongoose from "mongoose"

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, "_id">

export type Notes = {
 
  text: string
  color: string
  user: string
  
}
export type NotesDatabase = {
  _id: string
  createdAt:string
  text:string
  color: string
  user: string
}


const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const notesSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    color: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Notes = mongoose.models?.Notes || mongoose.model("Notes", notesSchema)
