import React, { useState } from 'react'
import InputField from './InputField'

function SignUp() {
  const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [password,setPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
const [avatar,setAvatar]=useState("")
  return (
    <div className='container-14'>
  <form>
  <h1>MyStore</h1>
    <h2>Sign Up</h2>
    <InputField lable={'Name'}  type={'text'} value={name} placeholder={"Enter Name"} setValue={setName}/>
    <InputField lable={'Email'}  type={'email'} value={email} placeholder={"Enter Email"} setValue={setEmail}/>
    <InputField lable={'Phone No.'}  type={'number'} value={phone} placeholder={"Enter Phone"} setValue={setPhone}/>
    <InputField lable={'Password'}  type={'password'} value={password} placeholder={"Enter password"} setValue={setPassword}/>
    <InputField lable={'Confirm Password'}  type={'password'} value={confirmPassword} placeholder={"Enter Confirm Password"} setValue={setConfirmPassword}/>
    <InputField lable={'Avatar'}  type={'file'} value={avatar} setValue={setAvatar}/>
    <button className="submit-button">Submit</button>
    <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
      </div>
  </form>
    </div>
  )
}

export default SignUp
