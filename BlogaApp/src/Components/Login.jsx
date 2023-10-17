import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useForm, Controller} from "react-hook-form"
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../Features/AuthSlice'

const Login = () => {
    const {register,handleSubmit,control}=useForm()
    const dispacth = useDispatch();
    const userData = useSelector((state)=>state.Auth.user)
   
    const handleRegister =async (data)=>{
        
     try {
        const response = await axios.post('http://localhost:8000/login',{data})
        if(response.data.success){
         dispacth(login({user:response.data.user}))
         console.log(response.data.user)
        }
     } catch (error) {
        console.error("login error",error);
     }
     
    }
    console.log(userData);
  return (
    <div>
           <form onSubmit={handleSubmit(handleRegister)} >
        <Controller control={control} name='Login' 
        render={({field:{onChange}})=>(
<>
            <Input  type="email" label="Email" {...register("email",{required:true})}/>
            <Input  type="password" label="Password" {...register("password",{required:true})}/>
            <Button type='submit' color='primary' variant='ghost'>Login</Button>
</>
        )}
        >
        
        </Controller>
        </form>
    </div>
  )
}

export default Login