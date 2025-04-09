import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
  

const Navbar = () => {

  const {auth} = useSelector(store=>store);

  return (
    <div className='px-2 py-3 z-50 bg-background bg-opacity-5 sticky
    top-0 left-0 right-0 flex justify-between items-center border-b-[1px] border-[#685a5a]'>

    <div className='flex items-center gap-3'>
    <Sheet>
  <SheetTrigger>
   <Button variant='ghost' size='icon' className='rounded-full h-11 w-11'>
    <DragHandleHorizontalIcon className='h-7 w-7' />
   </Button>
  </SheetTrigger>
  <SheetContent side="left" className=' w-72 border-r-0 flex flex-col'>
    <SheetHeader>
      <SheetTitle>
        <div className='text-3xl flex justify-center items-center gap-1 '>
            <Avatar>
                <AvatarImage src='https://cdn-icons-png.flaticon.com/512/6001/6001283.png' className='h-10'/>
            </Avatar>
            <div>
                <span className='text-orange-700 font-bold'>OM</span>
                <span>Trade</span>
            </div>
        </div>
      </SheetTitle>
      
    </SheetHeader>

    <SideBar/>
  </SheetContent>
</Sheet>

<p className=' cursor-pointer'>OM Trading</p>

        <div className='p-0 ml-9 '>
          <Button variant='outline' className='flex item-center gap-3'>
            <MagnifyingGlassIcon/>
            <span>Search</span>
          </Button>
        </div>

    </div>
    <div >
      <Avatar className='cursor-pointer px-3 py-2 rounded-full bg-green-900' >
        <AvatarFallback>
          {auth.user?.fullName[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
        
    </div>
  )
}

export default Navbar