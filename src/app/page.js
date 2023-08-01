"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import {Glitch} from "react-teffex";
const Page = () => {
  return (
    <>
    <div className='flex justify-center items-center '>
      <img src="bg.jpg" alt="" className='h-[100vh] object-cover  lg:object-fill lg:h-[100vh] lg:w-[100vw]'/>
        <div className='text-white absolute lg:h-[40rem] lg:w-[80rem] w-[20rem] h-[40rem]  flex justify-center items-center lg:flex-row flex-col-reverse'>
          <motion.div className=' lg:w-[40rem] w-[20rem] h-[40rem] flex flex-col lg:text-start text-center'
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          >
           
            <div className='lg:text-[5rem] text-[3rem] text-black font-extrabold lg:mt-28'>
                I AM
            </div>
            <div className='lg:text-[5rem] text-[3rem] text-purple-100 font-extrabold'>
              {/* impliment react teffex */}
              <Glitch text={"SABYASACHI"} />
                
            </div>
      
            <div className='text-purple-200 font-semibold lg:text-[4rem] text-[3rem]'>a
              <span className='text-black font-extrabold'><Typewriter
            words={[' Developer ',' Designer',' Learner',' Tech Enthusiast']}
            loop={0}
            cursor
            cursorStyle='|'
          /></span>
            </div>
            <motion.div className='h-[0.3rem] lg:w-[40rem] w-[20rem] bg-purple-200 hidden lg:block mt-6 mb-6 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'
            initial={{
              
              width:0,
            }}
            whileInView={{
              width:530
            }}
            >

            </motion.div>

            <motion.div className='h-[0.3rem] lg:w-[20rem] w-[20rem] bg-purple-200 lg:hidden block mt-6 mb-6 '
            initial={{
              
              width:0,
            }}
            whileInView={{
              width:320
            }}
            >

            </motion.div>
            <div className='text-purple-100 font-semibold text-[2rem]'>
            connect with me 👇🏻
          </div>

          <div className='flex flex-row items-center space-x-10 mt-6 lg:justify-start justify-center'>
              {/*all the links here */}
              <a href="https://www.instagram.com/sabyasachi_panda_/">
              <div className='text-3xl hover:text-pink-500'>
              <i class="fa-brands fa-instagram"></i>
              </div>
              </a>
             
              <a href="https://twitter.com/Roshan_panda007">
              <div className='text-3xl hover:text-black'>
              <i class="fa-solid fa-x"></i>
              </div>
              </a>
             
              <a href="https://github.com/roshanpanda666">
              <div className='text-3xl hover:text-black'>
              <i class="fa-brands fa-github"></i>
              </div>
              </a>
              

              <a href="https://www.linkedin.com/in/sabyasachi-panda-351870256/">
              <div className='text-3xl hover:text-blue-500'>
              <i class="fa-brands fa-linkedin"></i>
              </div>
              </a>
              
              <a href="https://portfolio-of-sabyasachipanda.vercel.app/">
              <div className='text-3xl hover:text-orange-300'>
              <i class="fa-solid fa-person"></i>
              </div>
              </a>
              


             
          </div>
          </motion.div>
          <motion.div className=' lg:w-[40rem] w-[20rem] h-[40rem]'
           initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          >
              <img src="me.jpg" alt="" className='scale-75 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'/>
          </motion.div>
         
        </div>
        
    </div>
      
    </>
  )
}

export default Page
