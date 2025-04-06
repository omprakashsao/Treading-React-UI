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
import { addPaymentDetails } from '@/state/Withdrawal/Action'

const PaymentDetailFrom = () => {

  const dispatch = useDispatch();


    const form = useForm({
        resolver: "",
        defaultValues: {
            accountHolderName:"",
            ifsc:"",
            accountNumber:"",
            bankName:"",
        }
    })

    const onSubmit = (data)=>{
        dispatch(addPaymentDetails({
          paymentDetails: data,
          jwt: localStorage.getItem("jwt")
        }))
        console.log(data)
    }

  return (
    <div className='px-10 py-2'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className='space-y-6'>

            <FormField
  control={form.control}
  name="accountHolderName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Account Holder Name</FormLabel>
      <FormControl>
        <Input placeholder="e.g. Om Prakash Sao" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  

<FormField
  control={form.control}
  name="ifsc"
  render={({ field }) => (
    <FormItem>
      <FormLabel>IFSC Code</FormLabel>
      <FormControl>
        <Input  placeholder="e.g. Om Prakash Sao" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  


<FormField
  control={form.control}
  name="accountNumber"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Account Number</FormLabel>
      <FormControl>
        <Input placeholder="**********5604" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  

<FormField
  control={form.control}
  name="confirmAccountNumber"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Confirm Account Number</FormLabel>
      <FormControl>
        <Input placeholder="confirm account number" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  

<FormField
  control={form.control}
  name="bankName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bank Name</FormLabel>
      <FormControl>
        <Input placeholder="YES Bank" {...field} className='border w-full border-gray-700 p-5 p-5'/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>  
<DialogClose className='w-full'>

<Button className='w-full py-5'>
    Submit
</Button>
</DialogClose>
             </form>

        </Form>
        
    </div>
  )
}

export default PaymentDetailFrom