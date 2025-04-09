import { Cross1Icon, Cross2Icon, ValueIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import AssetTable from './AssetTable';
import StockChart from './StockChart';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { CrossIcon, DotIcon, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinList, getTop50CoinList } from '@/state/Coin/Action';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const Home = () => {

    const [category , setCategory]  = useState("all");
    const [inputValue, setInputValue] = useState("");
    
    const [isBotRelease, setIsBotRelease] = useState(false);
    const {coin} =useSelector(store=>store);
    const dispatch = useDispatch()

    const handleBotRelease= ()=> setIsBotRelease(!isBotRelease);

    const handleCategory = (value)=>{
        setCategory(value)
    }
    
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleKeyPress = (event)=>{
        if(event.key == "Enter"){
            console.log(inputValue);
        }
        setInputValue("");
    }
    
    
    useEffect(()=>{
        dispatch(getCoinList(1))
    },[])

    useEffect(()=>{
        dispatch(getTop50CoinList())
    }, [category])

    console.log(coin)

  return (
    <div className='relative'>
        <div className='lg:flex'>
            <div className='lg:w-[50%] lg:border-r'>
                <div className='p-3 flex items-center gap-4'>
                <Button onClick={()=>handleCategory("all")} className='rounded-full' 
                    variant={category=="all"?"default": "outline"}>All</Button>

                    <Button onClick={()=>handleCategory("top50")} className='rounded-full'
                     variant={category=="top50"?"default": "outline"}>Top 50</Button>
                    
                    <Button onClick={()=>handleCategory("topGainers")} className='rounded-full'
                     variant={category=="topGainers"?"default": "outline"}>Top Gainers</Button>

                     <Button onClick={()=>handleCategory("topLosers")} className='rounded-full'
                     variant={category=="topLosers"?"default": "outline"}>top50</Button>
                </div>

                <AssetTable coin={category=="all"?coin.coinList : coin.top50} category={category} />

                <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>

            <div className='hidden lg:block lg:w-[50%] p-5'>
                <StockChart coinId={"bitcoin"}/>

                <div className='flex gap-5 items-center'>
                    <div>
                    <Avatar>
                        <AvatarImage className='h-10'  src={"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501400"}/>

                    </Avatar>
                    </div>
                    <div>
                    <div className='flex items-center gap-2'>
                        <p>ETH</p>
                        <DotIcon className='text-gray-400'/>
                        <p className='text-gray-400'>Ethereum</p>
                    </div>

                    <div className='flex items-end gap-2'>
                        <p className='text-xl font-bold'>5464</p>
                        <p className='text-red-500'>
                            <span>-23764289374</span>
                            <span>(-0.2345%)</span>
                        </p>
                    </div>
                    </div>

                </div>

            </div>
        </div>

        <section className='absolute bottom-5 right-5 z-40 flex 
        flex-col justify-end items-end gap-2'>

           { isBotRelease && <div className='rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] 
            h-[70vh] bg-slate-900'>
                <div className='flex justify-between items-center border-b px-6 h-[12%]'>

                <p>Chat Bot</p>
                <Button onClick={handleBotRelease} variant='ghost' size='icon'>
                    <Cross2Icon/>
                </Button>
                </div>
                <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5
                py-2 scroll-container'>
                <div className='self-start pb-5 w-auto'>
                
                <div className='justify-end self-end px-5 py-2 rounded-md 
                bg-slate-800 w-auto'>
                    <p>Hi, Om Prakash</p>
                    <p>You can ask crypto related any question</p>
                    <p>like, price , market cap extra....</p>
                </div>
                </div>

                {
                    [1,1,1,1].map((item, i)=> (
                    <div key={i} 
                    className={`${i%2==0?"self-start":"self-end"} 'pb-5 w-auto'`}>

                    {i%2? <div className='justify-end self-end px-5 py-2 rounded-md 
                bg-slate-800 w-auto'>
                    <p>prompt, who are you?</p>
                    
                </div> : <div className='justify-end self-end px-5 py-2 rounded-md 
                bg-slate-800 w-auto'>
                    <p>Ans hi, Om Prakash</p>
                </div>}
                
                

                
                </div>))
                }


                

        

                </div>

                <div className='h-[12%] border-t'>
                <Input className='w-full h-full order-none outline-none' placeholder="write prompt"
                 onChange={handleChange}
                 value={inputValue}
                 onKeyPress={handleKeyPress}
                 />

                </div>
            </div>}


            <div className='relative w-[10rem] cursor-pointer group'>
                <Button 
                onClick={handleBotRelease}
                className='h-[2.5rem] gap-2 items-center'>
                <MessageCircle className='fill-[#1e293b] -rotate-90 
                stroke-none group-hover:fill-[#1a1a1a]' size={30}/>
                <span className='text-2xl'>Chat Bot</span>
                </Button>

            </div>
        </section>
    </div>
  )
}

export default Home