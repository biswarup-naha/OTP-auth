import React, { useState } from 'react'
import OtpInput from './OtpInput'

const PhoneotpForm = () => {
  const [phoneNumber, setphoneNumber] = useState("")
  const [showOTP, setshowOTP] = useState(false)
  const handlePhoneNumber=(event)=>{
    setphoneNumber(event.target.value)
  }
  const handlePhoneSubmit=(event)=>{
    event.preventDefault();

    //phone validation
    const regex=/[^0-9]/g   //contains values only from 0 to 9
    if(phoneNumber.length<10 || regex.test(phoneNumber)){
      alert("invalid phone number");
      return;
    }

    //call backend API
    //show OTP field
    setshowOTP(true)
  };

  const onOtpSubmit=(otp)=>{
    console.log("Login successful",otp)
  }

  return (
    <div>

      {!showOTP ?
      <form onSubmit={()=>{}}>
          <input type="text" value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder='Enter your phone number'
          />
          <button type="submit" onClick={handlePhoneSubmit}>
            Send OTP
          </button>
        </form> : <div> 
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>}
        
    </div>
  )
}

export default PhoneotpForm