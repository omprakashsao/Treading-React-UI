import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAssetDetails } from '@/state/Asset/Action'
import { payOrder } from '@/state/Order/Action'
import { getUserWallet } from '@/state/Wallet/Action'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DotIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TreadingForm = () => {

  const dispatch = useDispatch();

    const [orderType , setOrderType] = useState("BUY");

    const [ amount , setAmount ] = useState(0);
    const [ quantity, setQuantity] = useState(0);

    const {coin}= useSelector(store=> store);
    const {wallet} = useSelector(store=>store);
    const {asset} = useSelector(store=>store);
    console.log("es",asset)

    const calculateBuyCost = (amount, price ) =>{
        let volume= amount/price;
        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length)

        return volume.toFixed(decimalPlaces);
    }
    console.log("wake",asset)


const handleChange = (e)=>{
    const amount = e.target.value;
    setAmount(amount);
    const volume = calculateBuyCost(amount, coin.coinDetails.market_data.current_price.usd);
    console.log("amount", amount);
    console.log("price ",coin.coinDetails.market_data.current_price.usd)
    setQuantity(volume);
}

useEffect(()=>{
    dispatch(getUserWallet(localStorage.getItem('jwt')))

    dispatch(
      getAssetDetails({
      coinId: coin.coinDetails.id, 
      jwt: localStorage.getItem('jwt'),
    })
  )
},[])

const handleBuyCrypto = ()=>{
  dispatch(payOrder({
    jwt: localStorage.getItem('jwt'), 
    amount,
    orderData: {
      coidId: coin.coinDetails?.id,
      quantity,
      orderType,
    },

  }))
}

  return (
    <div className='space-y-10 p-5'>

        <div>

            <div className='flex gap-4 items-center justify-between'>
                <Input
                className='py-7 focus:outline-none'
                placeholder="Enter Amount"
                onChange={handleChange}
                type="number"
                name="amount"
                />
                <div>
                    <p className='border text-2xl flex justify-center items-center
                    w-36 h-14 rounded-md'>{quantity}</p>
                </div>

            </div>
            {false && <h1 className='text-red-600 text-center pt-4'>Insufficient wallet balance to buy</h1>}
        </div>

        <div className='flex gap-5 items-center'>
          <div>

          <Avatar>
            <AvatarImage className='h-10'
            src={"http://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501400"}
            />
          </Avatar>
          </div>


        <div>

        <div className='flex items-center gap-2'>
          <p>BTC</p>
          <DotIcon className='text-gray-400'/>
          <p className='text-gray-400'>Bitcoin</p>

        </div>
        <div className='flex items-end gap-2'>
          <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.usd}</p>
          <p className='text-red-600'>
            <span>-1312432343.324</span>
            <span>
              (-0.2353%)
            </span>
          </p>

        </div>
        </div>

        </div>

        <div className='flex items-center justify-between'>
            <p>Order Type</p>
            <p>Market Order</p>

        </div> 

        <div className='flex items-center justify-between'>
        <p>{orderType == "BUY" ?"Available Cash" : "Available Quantity"}</p>
        <p>${orderType == "BUY" ?  wallet.userWallet?.balance : asset.assetDetails?.quantity || 0}</p>
        

        </div>

        <div>
            <Button onClick={handleBuyCrypto} className={`w-full py-6 ${orderType=='SELL'? 'bg-red-600 text-white' : ''}`}>
                {orderType}
            </Button>
            <Button
            variant='link'
            className='w-full mt-5 text-xl' 
            onClick={()=>setOrderType(orderType=="BUY"? "SELL" : "BUY")}>
                {orderType=="BUY" ? "or Sell" : "or Buy"}
            </Button>
        </div>



        
    </div>
  )
}

export default TreadingForm