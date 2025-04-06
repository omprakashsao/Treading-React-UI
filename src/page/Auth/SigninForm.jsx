import React from 'react'
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { useDispatch } from 'react-redux'
import { login } from '@/state/Auth/Action'
import { useNavigate } from 'react-router-dom'

const SigninForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

    const form = useForm({
        resolver: "",
        defaultValues: {
            email:"",
            password:"",
        }
    })

    const onSubmit = (data)=>{
       dispatch(login({data, navigate}));
        console.log(data)
    }

  return (
    <div>
        <h1 className='text-xl font-bold text-center pb-3'>Login</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className='space-y-6'>

<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Input  placeholder="omprakash@gmail.com" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  


<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Input placeholder="your password" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  


<Button className='w-full py-5'>
    Submit
</Button>

             </form>

        </Form>
        
    </div>
  )
}

export default SigninForm