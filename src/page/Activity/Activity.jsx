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
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon, ValueIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersForUser } from '@/state/Order/Action'
import { calculateProfit } from '@/utils/calculateProfit'

const Activity = () => {
  const dispatch = useDispatch()
  const {order } = useSelector(store=>store)
  
  useEffect(()=>{
    dispatch(getAllOrdersForUser({jwt: localStorage.getItem('jwt')}))
  },[])
  console.log("ded",order)
  return (
    <div className='p-5 lg:p-20'>
    <h1 className='font-bold text-3xl text-green-50 pb-5'>TREADING HISTORY</h1>
       <Table className='border'>
       <TableHeader>
         <TableRow>
           <TableHead className="py-5">Date & Time</TableHead>
           <TableHead>Treading Pair</TableHead>
           <TableHead>Buy Price</TableHead>
           <TableHead>Sell Price</TableHead>
           <TableHead>Order Type</TableHead>
     
           <TableHead >Profit/Loss</TableHead>
           <TableHead className="text-right">Value</TableHead>
         </TableRow>
       </TableHeader>
       <TableBody>
     
         {
             order.orders.map((item, index)=>(
     
         <TableRow key={index}>
           <TableCell>
            <p>{new Date(item.timestamp).toISOString().split('T')[0]}</p>
            <p className='text-gray-400'>{new Date(item.timestamp).toTimeString().split(' ')[0]}</p>
           </TableCell>

           <TableCell className="font-medium flex items-center gap-2">
             <Avatar>
                 <AvatarImage className='h-8' src={item.orderItem.coin.image}/>
             </Avatar>
             <span>{item.orderItem.coin.name}</span>
           </TableCell>
           <TableCell>${item.orderItem.buyPrice}</TableCell>
           <TableCell>{item.orderItem.sellPrice}</TableCell>
           <TableCell>{item.orderType}</TableCell>
           <TableCell >{calculateProfit(item)}</TableCell>
           <TableCell className="text-right">
            {item.price}
           </TableCell>
         </TableRow>
             ))
         }
     
       </TableBody>
     </Table>
</div>
  )
}

export default Activity