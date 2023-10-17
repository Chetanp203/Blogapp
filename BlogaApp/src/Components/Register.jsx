import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useForm, Controller} from "react-hook-form"
const Register = () => {
    const {register,handleSubmit,control}=useForm()

   const handleRegister =(data)=>{
    console.log(data);

   }
  return (
    <div>
        <form onSubmit={handleSubmit(handleRegister)} >
        <Controller control={control} name='Login' 
        render={({field:{onChange}})=>(
<>
            <Input  type="text" label="Name" {...register("name",{required:true})} />
            <Input  type="email" label="Email" {...register("email",{required:true})}/>
            <Input  type="password" label="Password" {...register("password",{required:true})}/>
            <Button type='submit' color='secondary' variant='ghost'>Register</Button>
</>
        )}
        >
        
        </Controller>
        </form>
    </div>
  )
}

export default Register