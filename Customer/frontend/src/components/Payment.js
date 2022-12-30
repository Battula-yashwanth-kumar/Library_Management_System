import React, { useState } from "react";
import GooglePayButton from '@google-pay/button-react';
import { useNavigate } from "react-router-dom";
 
const Payment=()=>{
  const[reg,setReg]=useState("");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[fine,setFine]=useState("");
  const nav =useNavigate();
  const collectionData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/fine", {
      method: "post",
      body: JSON.stringify({ name, reg,  email,fine }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      localStorage.setItem("User", JSON.stringify(result));
      nav("/");
    }
  };
  return(
    <div className="paymentpage">
    <div className="Payment_btn">
      <div>
        <form onSubmit={collectionData}>
        <input type="text" className="Paymentinput" value={reg} placeholder="Enter your registration No" onChange={(e)=>
         setReg( e.target.value) } required />
           <input type="text" className="Paymentinput" value={name} placeholder="Enter your Name" onChange={(e)=>
        setName(e.target.value)} required />
           <input type="text" className="Paymentinput" value={email} placeholder="Enter your Email" onChange={(e)=>
         setEmail( e.target.value )} required /> 
          <input type="text" className="Paymentinput paymentinput1" value={fine} placeholder="Enter the amount of Fine" onChange={(e)=>
          setFine(e.target.value) } required />
          <GooglePayButton
      environment='TEST'
      paymentRequest={{
        apiVersion:2,
        apiVersionMinor:0,
        allowedPaymentMethods:[
          {
            type:"CARD",
            parameters:{
              allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
              allowedCardNetworks:["MASTERCARD","VISA"]
            },
            tokenizationSpecification:{
              type:"PAYMENT_GATEWAY",
              parameters:{
                gateway:'example',
                gatewayMerchantId:"exampleGateMerchantID"

              }
            },
          },
        ],
        merchantInfo:{
          merchantId:"123456796533",
          merchantName:"Yashwanth Kumar"

        },
        transactionInfo:{
          totalPriceStatus:"FINAL",
          totalPriceLabel:"Total",
          totalPrice:"10",
          currencyCode:"INR",
          countryCode:"IN"
        },
        shippingAddressRequired:true,
        callbackIntents:["PAYMENT_AUTHORIZATION"]
      }}
      onLoadPaymentData={paymentRequest=>{
        console.log(paymentRequest)

      }}
      onPaymentAuthorized={
        paymentData=>{
          console.log(paymentData);
          return{transactionState:'SUCCESS'}
        }
      }
      existingPaymentMethodRequired='false'
      buttonColor="Black"
      buttonType="pay"
      >

      </GooglePayButton>
      <button type="submit" id="paymentbtn" className=" Paymentinput">Submit</button>
          </form>
      </div>
    </div>
    </div>
  );
}
export default Payment;