import React from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema } from './loginValidation';
import {zodResolver} from "@hookform/resolvers/zod"
const LoginFormHook = () => {
    const {register , handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)});

    const onsubmit = (data) => {
        console.log(data);
    }
  return (
    <div className='container'
    style={{textAlign:"center" , border:"1px solid black" , padding:"20px" , margin:"20px auto" , width:"300px" ,flexDirection:"column"}}
    >
        <h2>Login Form</h2>
        <form 
        noValidate
        onSubmit={handleSubmit (onsubmit)}
        style={{display:"flex" , flexDirection:"column"}}
       
        >
            <div>

                <label>Email</label>
                <input
                style={{border:"1px solid black" , padding:"10px" , margin:"10px auto"}}
               
                 type="email" {...register("email" , {required : "email is required"})} />

                {errors.email && ( <p 
                style={{color:"red" , fontSize:"12px"}}
                >{errors.email.message }</p>)}
              

            </div>
            <div>
                <label>Password</label>
            <input
            style={{border:"1px solid black" , padding:"10px" , margin:"10px auto"}}

             type="password" {...register("password",{required : "password is required"})} />
              {errors.password && ( <p
                   style={{color:"red" , fontSize:"12px"}}
              >{errors.password.message }</p>)}
            </div>

<button type='submit' 
style={{border:"none" , padding:"10px" , margin:"10px auto" , backgroundColor:"blue" , color:"white" , cursor:"pointer"}}

> Login</button>


        </form>
        
    </div>
  )
}

export default LoginFormHook