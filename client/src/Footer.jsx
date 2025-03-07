import React, { useState } from 'react'
import './foot.css'
export default function Footer() {
  const [foot,setfoot]=useState("");
  const settingfoot=(item)=>{
    if(foot===item)
      setfoot("");
  else setfoot(item);
  }
  return (
    <>
    <div className='foot_container'>
    <div className='foot_nav'>
    <ul>
      <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
      <li onClick={()=>settingfoot("aboutus")}>About us</li>
      <li onClick={()=>settingfoot("contact")}>Contact</li>
      <li onClick={()=>settingfoot("mail")}>Mail</li>
      <li onClick={()=>settingfoot("terms")}>Terms and conditions</li>
      <li onClick={()=>settingfoot("policy")}>Privacy policy</li>
      <li onClick={()=>settingfoot("license")}>License</li>
    </ul>
    </div>
    <div className='text-cont-box'>
    {(foot==="aboutus" && <div className='foot_text'> making application  for people convinience </div>)}
    {(foot==="contact" && <div className='foot_text'>Phone = whatsapp = 8610799755 </div>) }
    {(foot==="mail" && <div className='foot_text'>mail : balaji9750452687@gmail.com</div>) }
    {(foot==="terms" && <div className='foot_text'>Be aware of privacy policy</div>)}
    {(foot==="policy" && <div className='foot_text'>Be aware of Terms and conditions </div>) }
    {(foot==="license" && <div className='foot_text'>This page is officialy belongs to Balaji & Co</div>)}
    </div>
    </div>
    </>
  )
}
