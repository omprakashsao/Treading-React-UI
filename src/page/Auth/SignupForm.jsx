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
import { useDispatch, useSelector } from 'react-redux'
import { register } from '@/state/Auth/Action'

const SignupForm = () => {

  const dispatch = useDispatch();
 

    const form = useForm({
        resolver: "",
        defaultValues: {
            fullName:"",
            email:"",
            password:"",
        }
    })

    const onSubmit = (data)=>{
      dispatch(register(data)); 
        console.log(data)
       
    }

  return (
    <div >
        <h1 className='text-xl font-bold text-center pb-3'>Create new Account</h1>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className='space-y-6'>

            <FormField
  control={form.control}
  name="fullName"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Input placeholder="Om Prakash Sao" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  

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

export default SignupForm