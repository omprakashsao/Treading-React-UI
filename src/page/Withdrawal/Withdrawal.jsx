import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux';
import { getWithdrawalHistory } from '@/state/Withdrawal/Action';

const Withdrawal = () => {

  const dispatch = useDispatch();

    const {wallet, withdrawal} = useSelector(store=>store);
    console.log("i am om ", withdrawal)

    useEffect(()=>{
      dispatch(getWithdrawalHistory({jwt: localStorage.getItem("jwt")}))
    },[])

  return (
    <div className='p-5 lg:p-20'>
    <h1 className='font-bold text-3xl text-green-50 pb-5'>WITHDRAWAL</h1>
       <Table className='border'>
       <TableHeader>
         <TableRow>
           <TableHead className="py-5">Date</TableHead>
           <TableHead>Method</TableHead>
           <TableHead>Amount</TableHead>
         
           <TableHead className="text-right">Status</TableHead>
         </TableRow>
       </TableHeader>
       <TableBody>
     
         {
             withdrawal.history.map((item, index)=>(
     
         <TableRow key={item.id}>
           <TableCell>
            <p>{item.date}</p>
           </TableCell>

           <TableCell>Bank</TableCell>
           <TableCell >${item.ammount}</TableCell>
           <TableCell className="text-right">
            {item.status}
           </TableCell>
         </TableRow>
             ))
         }
     
       </TableBody>
     </Table>
</div>
  )
}

export default Withdrawal