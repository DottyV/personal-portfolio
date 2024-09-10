import React from 'react'
import WorkItem from './WorkItem'

const data = [
    { year: 2024, title: "Project A", duration: "3 months", details: "Details about Project A" },
    { year: 2023, title: "Project B", duration: "6 months", details: "Details about Project B" },
    { year: 2022, title: "Project C", duration: "4 months", details: "Details about Project C" },
    { year: 2021, title: "Project D", duration: "5 months", details: "Details about Project D" },
    { year: 2020, title: "Project E", duration: "2 months", details: "Details about Project E" }
  ];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} />
        ))}
    </div>
  )
}

export default Work
