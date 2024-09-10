import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFileCode, FaGithub,FaLinkedinIn} from 'react-icons/fa'

const Main = () => {

  const onButtonClick = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='main'>
      <img 
        className='w-full h-screen object-cover object-left scale-x-[-1]' 
        src="/andy1.jpg" 
        alt="" 
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Daniel Kolawole</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Software Engineer',
                    1000,
                    'Developer',
                    // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                    // 'Coder',
                    1000,
                    'Student',
                    1000,
                    'Tech Enthusiast',
                    1000
                ]}
                wrapper="span"
                cursor={true}
                speed={50}
                style={{ fontSize: '1em',paddingLeft: '5px', display: 'inline-block'  }}
                repeat={Infinity}
            />
        </h2>
        <div className='flex justify-between pt6 max-w-[100px] w-full'>
            <FaLinkedinIn className='cursor-pointer' href='https://www.linkedin.com/in/daniel-kolawole-72504b2aa/' size={20}/>
            <FaGithub className='cursor-pointer'href='https://github.com/DottyV' size={20}/>
            <FaFileCode onClick={onButtonClick} className='cursor-pointer'href='#' size={20}/>
            {/* <FaTwitter />
            <FaTwitter /> */ }
        </div>
      </div>
      </div>

    </div>
  )
}

export default Main
