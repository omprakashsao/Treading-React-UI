import { Button } from './components/ui/button'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/home'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import Withdrawal from './page/Withdrawal/Withdrawal'
import PaymentDetails from './page/PaymentDetails/PaymentDetails'
import StockDetails from './page/Stock Details/StockDetails'
import Watchlist from './page/Watch list/Watchlist'
import Profile from './page/Profile/Profile'
import SearchCoin from './page/Search/SearchCoin'
import Notfound from './page/Notfound/Notfound'
import Auth from './page/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './state/Auth/Action'

function App() {

  const {auth} = useSelector(store=>store);
  
  const dispatch = useDispatch();
  
  console.log("auth -- ",auth);

  useEffect(()=>{
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  },[auth.jwt])


  return (
    <>
  {auth.user ?  <div>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/withdrawal' element={<Withdrawal/>}/>
      <Route path='/payment-details' element={<PaymentDetails/>}/>
      <Route path='/market/:id' element={<StockDetails/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/search' element={<SearchCoin/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div> : <Auth/>}
    </>
  )
}

export default App
