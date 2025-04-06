import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import PaymentDetailFrom from "./PaymentDetailFrom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPaymentDetails } from "@/state/Withdrawal/Action"
  

const PaymentDetails = () => {

  const {withdrawal} = useSelector(store=>store);
  console.log("my adv p", withdrawal)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPaymentDetails({jwt: localStorage.getItem("jwt")}))
  },[])
  return (
    <div className="px-20">
        <h1 className="text-3xl font-bold py-10">Payment Details</h1>

        { withdrawal.paymentDetails ?  <Card>
            <CardHeader>
                <CardTitle>
                    {withdrawal.paymentDetails?.bankName.toUpperCase()}
                </CardTitle>
                <CardDescription>
                    A/C No : {withdrawal.paymentDetails?.accountNumber}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center">
                    <p className="w-32">A/C Holder</p>
                    <p className="text-gray-400"> : {withdrawal.paymentDetails?.accountHolderName.toUpperCase()}</p>

                </div>

                <div className="flex items-center">
                    <p className="w-32">IFSC</p>
                    <p className="text-gray-400"> : {withdrawal.paymentDetails?.ifsc}</p>

                </div>
            </CardContent>
        </Card> :  <Dialog>
  <DialogTrigger>
    <Button className='py-6 '>
        Add Payment Details
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Payment Details</DialogTitle>
      
    </DialogHeader>
    <PaymentDetailFrom/>
  </DialogContent>
</Dialog>}
       

       
         
    </div>
  )
}

export default PaymentDetails