import {useState} from'react';
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import react from './assets/react.png'
import html from './assets/html.png'
import git from './assets/git.png'
import next from './assets/next2.jpg'
import tailwind from './assets/tailwind.png'
import js from './assets/js.png'
import css from './assets/css.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img14 from './assets/img14.png'
import img15 from './assets/img15.png'
import img16 from './assets/img16.png'
import img17 from './assets/img17.png'
import img18 from './assets/img18.png'
import img19 from './assets/img19.png'
import img20 from './assets/img20.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import svg3 from './assets/svg3.svg'
import topography from './assets/topography.svg'
import ContactForm from './ContactForm'
function App() {
const [open,setOpen]=useState(false);

  const toggle =()=>{
setOpen(!open)
}

  
  return (
    <div className=' min-h-screen bg-[#F0F4F8] scroll-smooth scroll-auto'>
    
      <div className='flex flex-row justify-between items-center px-10 py-1 font-title'>
        <img src={img17} alt="" className='w-[160px]'/>
        <div className=' hidden flex-row gap-5 sm:flex'>
          <a href="#About" className='bg-[#010335] p-3 rounded-md font-medium text-white shadow-lg shadow-gray-400'>About Me</a>
          <a href="#Projects" className='bg-[#010335] p-3 rounded-md font-medium text-white shadow-lg shadow-gray-400'>Projects</a>
          <a href="#Contact" className='bg-[#010335] p-3 rounded-md font-medium text-white shadow-lg shadow-gray-400'>Contact</a>
        </div>
        <a href="https://api.whatsapp.com/send?phone=2347067808558"><img src={icon2} alt="" className='w-[45px] h-[45px] border-2 border-gray-200 shadow-2xl p-1 shadow-black rounded-lg'/></a>
        
        <ul className='flex  flex-col gap-1 sm:hidden ' onClick={toggle}>
    <li className='bg-gray-200 w-8 h-1'></li>
    <li className='bg-gray-200 w-8 h-1'></li>
    <li className='bg-gray-200 w-8 h-1'></li>
    </ul>
    {/* mobile dropdown */}
    <div  className={`fixed top-0 left-0 w-64 h-full bg-[#010335] text-white p-5 transform transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}> 
    <div className='flex flex-row justify-end'>
<button onClick={toggle}>&times;</button>
    </div>
    <div className='flex flex-col gap-4 font-bold text-xl'>
          <a href="#" className='hover:text-gray-500'>About Me</a>
          <a href="#" className='hover:text-gray-500'>Projects</a>
          <a href="#" className='hover:text-gray-500'>Contact</a>
     </div>
    
    </div>
      </div>
      {/* heroSection */}
      <div className='flex flex-row flex-wrap-reverse w-[80%] justify-center items-center m-auto gap-8 font-title my-10 lg:flex-nowrap pt-10 pb-20'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-black text-2xl font-medium'>Ibeh Michael</h2>
          <h1 className='text-[#010335] font-bold text-5xl'>Frontend Developer</h1>
          <p className='text-black text-2xl '>
          I specialize in crafting immersive and intuitive user experiences that seamlessly blend design and functionality. Leveraging the latest frontend technologies and frameworks, I bring creative visions to life with precision and attention to detail. Whether it's designing responsive interfaces or creating scalable solutions.
          </p>
           <div><button className='bg-[#010335] text-xl p-3 rounded-lg font-normal text-white shadow-lg shadow-gray-400'>
            Get In touch
          </button></div>
        </div>
        <img src={img16} alt="" className='w-[420px] rounded-2xl'/>
      </div>
      {/* About me section */}
      <div className='border-t-2 border-b-2 border-[#010335] border-[#010335 py-36 ' id='About'>
      <div className='flex flex-row w-[80%] gap-20 m-auto flex-wrap lg:flex-nowrap'>
        <img src={img14} alt="" className='w-[450px] h-[420px]  flex items-center m-auto'/>
        <div className='flex flex-col justify-center gap-9'>
          <h3 className='text-5xl font-semibold text-[#010335]'>About Me</h3>
          <h5 className='text-2xl text-gray-900 font-normal'>
          I am currently a computer science student at the University of Benin, Edo State, Nigeria, with a strong passion for frontend development and crafting user-friendly web applications. My journey also includes an interest in forex trading, where I am working towards consistent profitability. Combining my technical skills and trading experience, I have developed web apps designed to assist traders and streamline processes.The following are the teck stack that I use:
          </h5>
          <div className='flex flex-row gap-9 font-title justify-center text-gray-900 flex-wrap'>
          <h3 className='flex flex-col justify-center items-center '>  <img src={html} alt="" className='w-16'/>HTML</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={css} alt="" className='w-16'/>CSS</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={js} alt="" className='w-16'/>Javascript</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={git} alt="" className='w-16'/>Git</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={next} alt="" className='w-16 h-16'/>Next</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={tailwind} alt="" className='w-16 h-16'/>tailwind</h3>
          <h3 className='flex flex-col justify-center items-center '>  <img src={react} alt="" className='w-16 h-16'/>React</h3>
        </div>
        <div className='m-auto lg:m-0'><button className='border-4 border-[#010335] px-8 py-3 text-[#010335] text-xl hover:bg-[#010335]
        hover:text-white ease-in-out delay-75'>Download Resume</button></div>
        </div>
      </div>
      </div>
      {/* Projects */}
    <div className='flex flex-col justify-center items-center w-[80%]  mt-20 mx-auto gap-16' id='Projects'>
      <h1 className='text-5xl text-black font-semi-bold'>Projects</h1>
  
<div className='flex flex-row flex-wrap justify-center items-center mx-auto gap-10 w-[100%]'>    {/* item1 */}
    <div className='w-[563px] bg-gray-300 rounded-2xl'>
      <img src={img18} alt="" className='w-[563px] h-[255px] rounded-t-xl' />
      <div className='flex flex-col justify-center items-center gap-4 p-6'>
      <h5 className='text-3xl text-black font-medium'>Forex Calculator</h5>
      <p className='text-[#010335] text-center text-lg'>  
      A powerful tool designed to calculate profit, pips, and the optimal lot size for traders. It helps users manage risk effectively by determining the appropriate lot size based on their desired risk amount, while also providing precise profit and pip calculations. This tool empowers traders to make informed decisions and maintain accountability in their trading activities. 
      </p>
      <h6 className='text-white font-medium text-xl'>Technologies Used</h6>
      <div className='flex flex-row gap-5'>
      <img src={react} alt="" className='w-6 h-6'/>
      <img src={git} alt="" className='w-6 h-6'/>
      <img src={tailwind} alt="" className='w-6 h-6'/>
      </div>
      <div className='flex flex-row gap-3'>
        <button className='p-3 bg-white text-[#010335] border-4 border-[#010335] hover:bg-[#010335] rounded-sm hover:text-white ease-in-out delay-75'>View Live Demo</button>
        <button className='p-3 bg-[#26313F] border-2 border-white text-white hover:bg-black '>Visit Site</button>
      </div>
      </div>
    </div>
    {/* item2 */}
    <div className='w-[563px] bg-gray-300 rounded-2xl'>
      <img src={img19} alt="" className='w-[563px] h-[255px]' />
      <div className='flex flex-col justify-center items-center gap-4 p-7'>
      <h5 className='text-3xl text-black font-medium'>FxLogger</h5>
      <p className='text-[#010335] text-center text-lg'>  
      {/* this is the main alternative A forex journaling app that helps traders stay accountable and track their trades. It allows users to log their trades, review their performance, and learn from past experiences. FXLogger supports traders in improving their skills and growing to become more profitable.  */}
A forex journaling app that solves the problem of accountability for traders. FXLogger helps traders keep a clear record of their trades, making it easy to review past decisions and learn from mistakes. By analyzing previous trades, traders can refine their strategies, stay disciplined, and work towards consistent profitability. Take control of your trading journey with FXLogger!
      </p>
      <h6 className='text-white font-medium text-xl'>Technologies Used</h6>
      <div className='flex flex-row gap-5'>
      <img src={next} alt="" className='w-6 h-6'/>
      <img src={git} alt="" className='w-6 h-6'/>
      <img src={tailwind} alt="" className='w-6 h-6'/>
      </div>
      <div className='flex flex-row gap-3'>
        <button className='p-3 bg-white text-[#010335] border-4 border-[#010335] hover:bg-[#010335] rounded-sm hover:text-white ease-in-out delay-75'>View Live Demo</button>
        <button className='p-3 bg-[#26313F] border-2 border-white text-white hover:bg-black '>Visit Site</button>
      </div>
      </div>
    </div>
    {/* item3 */}
    <div className='w-[563px] bg-gray-300 rounded-2xl'>
      <img src={img20} alt="" className='w-[563px] h-[255px]' />
      <div className='flex flex-col justify-center items-center gap-4 p-7'>
      <h5 className='text-3xl text-black font-medium'>BMI Calculator</h5>
      <p className='text-[#010335] text-center text-lg'>
      A simple and engaging app that calculates your Body Mass Index (BMI) and provides tailored health tips to help you stay on track with your fitness goals. Along with BMI, the app considers your age and gender to give more personalized feedback. Whether you're aiming to maintain, lose, or gain weight, this app offers insights that can guide your journey toward a healthier lifestyle. It's not just a calculator—it's a step toward better health and well-being!
      </p>
      <h6 className='text-white font-medium text-xl'>Technologies Used</h6>
      <div className='flex flex-row gap-5'>
      <img src={next} alt="" className='w-6 h-6'/>
      <img src={js} alt="" className='w-6 h-6'/>
      <img src={tailwind} alt="" className='w-6 h-6'/>
      </div>
      <div className='flex flex-row gap-3'>
        <button className='p-3 bg-white text-[#010335] border-4 border-[#010335] hover:bg-[#010335] rounded-sm hover:text-white ease-in-out delay-75'>View Live Demo</button>
        <button className='p-3 bg-[#26313F] border-2 border-white text-white hover:bg-black '>Visit Site</button>
      </div>
      </div>
    </div>
    {/* item4 */}
    <div className='w-[563px] bg-gray-300 rounded-2xl'>
      <img src={img7} alt="" className='w-[563px] h-[255px]' />
      <div className='flex flex-col justify-center items-center gap-4 p-7'>
      <h5 className='text-3xl text-black font-medium'>Onari B Website</h5>
      <p className='text-[#010335] text-center text-lg'> 
      Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations. 


      </p>
      <h6 className='text-white font-medium text-xl'>Technologies Used</h6>
      <div className='flex flex-row gap-5'>
      <img src={next} alt="" className='w-6 h-6'/>
      <img src={js} alt="" className='w-6 h-6'/>
      <img src={tailwind} alt="" className='w-6 h-6'/>
      </div>
      <div className='flex flex-row gap-3'>
        <button className='p-3 bg-white text-[#010335] border-4 border-[#010335] hover:bg-[#010335] rounded-sm hover:text-white ease-in-out delay-75'>View Live Demo</button>
        <button className='p-3 bg-[#26313F] border-2 border-white text-white hover:bg-black '>Visit Site</button>
      </div>
      </div>
    </div>
    </div>
    </div>
    {/* Contact us */}
    <div className='flex flex-col justify-center items-center text-black  mt-20 pb-20 ' id='Contact'>
      <h1 className='text-4xl mb-10 font-title font-medium '>Contact Me</h1>
    <div className='flex flex-row w-[100%] mx-auto justify-center '>
      <h2 className='bg-[#010335] flex flex-col justify-center p-2 text-4xl w-[30%] items-start text-white text-left max-lg:hidden'>
      Let’s discuss 
      on something cool together
      </h2>
      <ContactForm />
      
    </div>
    </div>
    {/* footer */}
    <div className='flex flex-col justify-center items-center '>
      <img src={img17} alt="" className='w-[160px]'/>
      <div className=' hidden flex-row gap-2 sm:flex'>
          <a href="#About" className='bg-[#010335] p-3 rounded-md font-medium text-white shadow-lg shadow-gray-400'>About Me</a>
          <a href="#Projects" className='bg-[#010335] p-3 rounded-md font-medium text-white shadow-lg shadow-gray-400'>Projects</a>
          
        </div>
      <div className='flex flex-row  sm:pt-10 gap-5 mb-7'>
       <a href='https://www.linkedin.com/in/ibeh-michael-aa0708248/'><img src={icon1} alt="" className='w-[45px] h-[45px] border-2 border-gray-200 shadow-2xl shadow-black p-1 rounded-lg' /></a> 
      
      <a href="https://api.whatsapp.com/send?phone=2347067808558"><img src={icon2} alt="" className='w-[45px] h-[45px] border-2 border-gray-200 shadow-2xl p-1 shadow-black rounded-lg'/></a>
      <a href="https://github.com/devIbehMichael"><img src={icon4} alt="" className='w-[45px] h-[45px] border-2 border-gray-200 shadow-2xl p-1 shadow-black rounded-lg'/></a></div>
    
    </div>
    </div>
  )
}

export default App
