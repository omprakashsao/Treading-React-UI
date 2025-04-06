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
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ScrollArea } from '@radix-ui/react-scroll-area'
  

const AssetTable = ({coin, category}) => {


  const navigate = useNavigate();



  return (
    <Table>
      <ScrollArea className={`${category=='all'?"h-[77.3vh]":"h-[82vh]"} `}>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24h</TableHead>

      <TableHead className="text-right">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    {
        coin.map((item, index)=>(

    <TableRow key={item.id} onClick={()=>navigate(`/market/${item.id}`)}>
      <TableCell  className="font-medium flex items-center gap-2">
        <Avatar>
            <AvatarImage src={item.image} className='min-w-8 max-h-10'/>
        </Avatar>
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.symbol}</TableCell>
      <TableCell>{item.total_volume}</TableCell>
      <TableCell>{item.market_cap}</TableCell>
      <TableCell>{item.price_change_percentage_24h}</TableCell>
      <TableCell className="text-right">${item.current_price}</TableCell>
    </TableRow>
        ))
    }

  </TableBody>
      </ScrollArea>
</Table>

  )
}

export default AssetTable