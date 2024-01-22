import React, { useState } from 'react'
const [phoneNumber, setphoneNumber] = useState("")
const handlePhoneNumber=()=>{}

const PhoneotpForm = () => {
  return (
    <div>
        <form onSubmit={()=>{}}>
          <input type="text" value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder='Enter your phone number'
          />
        </form>
    </div>
  )
}

export default PhoneotpForm