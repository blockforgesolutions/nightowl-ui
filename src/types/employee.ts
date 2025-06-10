import { Club } from "./club";

export interface Employee {
    id:string;
    fullName:string
    email:string
    phoneNumber:string
    role:{
        id:string
        name:string
    }
    club:Club
    lastEntry?:Date
    lastExit?:Date
}