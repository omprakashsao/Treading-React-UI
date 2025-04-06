import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { transferMoney } from '@/state/Wallet/Action';
import { DialogClose } from '@radix-ui/react-dialog';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TransferForm = () => {
    const dispatch = useDispatch();

    const {wallet} = useSelector(store=>store);

    const [formData, setFormData] = useState({
        amount: '',
        walletId: '',
        purpose: '',
    
    });

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = ()=>{
        dispatch(transferMoney({
            jwt: localStorage.getItem("jwt"), 
            walletId: formData.walletId,
            reqData: {
                amount: formData.amount,
                purpose: formData.purpose,
            } 
        }))
        console.log(formData)
    }
  return (
    <div className='pt-10 space-y-5'>

        <div>
            <h1 className='pb-1'>Enter Amount</h1>
            <Input
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            className='py-7'
            placeholder='$9999'
            />
        </div>

        <div>
            <h1 className='pb-1'>Wallet Id</h1>
            <Input
            name="walletId"
            onChange={handleChange}
            value={formData.walletId}
            className='py-7'
            placeholder='#AEDR344'
            />
        </div>

        <div>
            <h1 className='pb-1'>Enter Purpose</h1>
            <Input
            name="purpose"
            onChange={handleChange}
            value={formData.purpose}
            className='py-7'
            placeholder='e.g. gift for my friend!!'
            />
        </div>
        <DialogClose className='w-full'>

        <Button className='w-full py-7' onClick={handleSubmit}>
            Submit
        </Button>
        </DialogClose>


    </div>
  )
}

export default TransferForm