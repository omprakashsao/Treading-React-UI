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
import { useDispatch, useSelector } from 'react-redux'
import { getUserAssets } from '@/state/Asset/Action'

const Portfolio = () => {

  const dispatch= useDispatch();

  const {asset} = useSelector(store=>store);
  console.log("u ",asset)
  useEffect(()=>{
      dispatch(getUserAssets({jwt: localStorage.getItem('jwt')}))
  },[])

  
  return (
      <div className='p-5 lg:p-20'>
        <h1 className='font-bold text-3xl text-green-50 pb-5'>PORTFOLIO</h1>
         <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Assets</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Unit</TableHead>
      <TableHead>Change</TableHead>
      <TableHead>Change(%)</TableHead>

      <TableHead className='text-right'>Volume</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    {
        asset.userAssets.map((item, index)=>(

    <TableRow key={index}>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar>
            <AvatarImage className='h-8' 
            src={item.coin.image}/>
        </Avatar>
        <span>{item.coin.name}</span>
      </TableCell>
      <TableCell>{item.buyPrice}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{136488142823}</TableCell>
      <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
      <TableCell className="text-right">{item.coin.total_volume}</TableCell>
    </TableRow>
        ))
    }

  </TableBody>
</Table>
    </div>
  )
}

export default Portfolio