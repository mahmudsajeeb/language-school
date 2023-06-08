import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='foooter'>
       <footer className="footer p-24 bg-[#3E3C36] text-neutral-content lg:flex justify-center lg:justify-between items-center mx-auto" >
        <div className='footer-section'>
          <span className="footer-titles">Conditions</span> 
          <a className="link link-hover">For Semester Courses</a>
          <a className="link link-hover">For 3-week Intensive Course</a>
          <a className="link link-hover">For Intensive Summer Courses</a>
          <a className="link link-hover">For Individual Courses</a>
        </div> 
        <div className='footer-section'>
          <span className="footer-titles">Menu</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Language Holidays</a>
          <a className="link link-hover">Language Corner</a>
        </div> 
        <div className='footer-section'>
          <span className="footer-titles">Useful Info</span> 
          <a className="link link-hover">Working with Us</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Social Programme</a>
        </div>
        <div className='footer-section'>
          <span className="text-4xl text-white font-semibold">Social</span> 
          <a className="link link-hover text-teal-500">Facebook</a>
          <a className="link link-hover text-teal-500">Twitter</a>
          <a className="link link-hover text-teal-500">Linkedin</a>
          <a className="link link-hover text-teal-500">Youtube</a>
     
        </div>
      </footer>

      <div className='footer-center pb-20 text-white'>
        <p><span className='text-teal-500'>Language Center</span> © 2023 - All right reserved by sajib Industries Ltd</p>
      </div>
    </div>
  )
}

export default Footer