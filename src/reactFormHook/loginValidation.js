 import {z} from 'zod';

 export const loginSchema = z.object({

    email: z.string().min(1 ,{message : "email is required " }).email({message :"invalid email format"}).refine((email )=> {
       email.startsWith("a") ,{message :"email must start with a "}
      
    })
    ,
      password: z.string().min(1 ,{message : "password is required " }).min(6 ,{message : "password must be at least 6 characters " }).refine((password )=> {
       password.endsWith("2") ,{message :"password must end with 2 "}
      })
      

 })