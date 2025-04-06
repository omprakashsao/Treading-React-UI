import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { logout } from '@/state/Auth/Action'
import { ActivityLogIcon, DashboardIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, CreditCardIcon, HomeIcon, LandmarkIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const menu = [
    {name: "Home", path:"/" , icon: <HomeIcon className='h-6 w-6'/>},
    {name: "Portfolio", path:"/portfolio" , icon: <DashboardIcon className='h-6 w-6'/>},
    {name: "Watchlist", path:"/watchlist" , icon: <BookmarkIcon className='h-6 w-6'/>},
    {name: "Activity", path:"/activity" , icon: <ActivityLogIcon className='h-6 w-6'/>},
    {name: "Wallet", path:"/wallet" , icon: <WalletIcon className='h-6 w-6'/>},
    {name: "Payment Details", path:"/payment-details" , icon: <LandmarkIcon className='h-6 w-6'/>},
    {name: "Withdrawal", path:"/withdrawal" , icon: <CreditCardIcon className='h-6 w-6'/>},
    {name: "Profile", path:"/profile" , icon: <PersonIcon className='h-6 w-6'/>},
    {name: "Logout", path:"/" , icon: <ExitIcon className='h-6 w-6'/>},
];

const SideBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const handleLogout = ()=>{
    dispatch(logout())
 }

  return (
    <div className='m-10 space-y-5'>

    {
        menu.map((item)=>(
             <div key={item.name}>
                    <SheetClose className='w-full h-[0px]'>
                        <Button 
                        onClick={()=> {navigate(item.path) 
                          if(item.name == "Logout"){
                            handleLogout()
                          }
                        }
                        } 
                        variant='outline' 
                        className='flex items-center gap-5 py-6 w-full'
                        >
                            <span className='w-8'>{item.icon}</span>
                            <p>{item.name}</p>
                        </Button>
                    </SheetClose>
             </div>
        ))
    }
       

       
    </div>
  )
}

export default SideBar