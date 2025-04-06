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
import { addItemToWatchList, getUserWatchList } from '@/state/Watchlist/Action'
import { existInWatchlist } from '@/utils/existInWatchlist'

const Watchlist = () => {

  const dispatch = useDispatch();

  const {watchlist} = useSelector(store => store);

    const handleRemoveToWatchlist = (value)=>{
        console.log(value);
     //  dispatch(addItemToWatchList({coinId: value , jwt: localStorage.getItem("jwt")}));

    }

    useEffect(()=>{
      dispatch(getUserWatchList(localStorage.getItem('jwt')))
    },[])

     

  return (
    <div className='p-5 lg:p-20'>
        <h1 className='font-bold text-3xl text-green-50 pb-5'>WATCH-LIST</h1>
           <Table className='border'>
           <TableHeader>
             <TableRow>
               <TableHead className="py-5">Coin</TableHead>
               <TableHead>SYMBOL</TableHead>
               <TableHead>VOLUME</TableHead>
               <TableHead>MARKET CAP</TableHead>
               <TableHead>24h</TableHead>
         
               <TableHead >PRICE</TableHead>
               <TableHead className="text-right text-red-600">REMOVE</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
         
             {
                 watchlist.items.map((item, index)=>(
         
             <TableRow key={index}>
               <TableCell className="font-medium flex items-center gap-2">
                 <Avatar>
                     <AvatarImage className='h-8' src={item.image}/>
                 </Avatar>
                 <span>{item.name}</span>
               </TableCell>
               <TableCell>{item.symbol.toUpperCase()}</TableCell>
               <TableCell>{item.total_volume}</TableCell>
               <TableCell>{item.market_cap}</TableCell>
               <TableCell>{item.price_change_percentage_24h}</TableCell>
               <TableCell >${item.current_price}</TableCell>
               <TableCell className="text-right">
                <Button variant='ghost' onClick={handleRemoveToWatchlist(item.id)} size='icon' className='h-10 w-10'>

                  {/* {existInWatchlist(watchlist.items, item) ? } */}
                    <BookmarkFilledIcon className='w-6 h-6'/>
                </Button>
               </TableCell>
             </TableRow>
                 ))
             }
         
           </TableBody>
         </Table>
    </div>
  )
}

export default Watchlist