import React from 'react'
import WorkItem from './WorkItem'

const data = [
    // { year: 2024, title: "Project A", duration: "3 months", details: "Details about Project A" },
    { year: 2025, title: "Electronic Questionnaire Development Specialist – Statistics Canada", duration: "Current", details: "Designed and developed electronic questionnaires, focusing on process automation to improve data collection efficiency." },
    { year: 2024, title: "Data Analytics Specialist – Environment and Climate Change Canada", duration: "4 months", details: "Utilized Python to analyze and resolve data quality issues across Environmental Policy, Business Glossary, and HR datasets. Automated data cleansing and validation processes, improving efficiency and reducing manual errors. Designed interactive Power BI dashboards to visualize data insights and support decision-making. Built a structured Microsoft Dataverse database with tiered user permissions from unorganized costing data. Established data standards for consistent reporting and resolved discrepancies to ensure accuracy." },
    { year: 2023, title: "Sales Associate – IKEA Ottawa", duration: "8 months", details: "Assisted customers by providing information and tailored recommendations to enhance their shopping experience. Leveraged product knowledge to guide purchase decisions and ensure customer satisfaction. Maintained inventory accuracy and stock levels to guarantee product availability on the sales floor. Supported visual merchandising and store presentation to create a welcoming and organized environment. Demonstrated adaptability and problem-solving skills when addressing customer inquiries and resolving issues." },
    { year: 2022, title: "Service Advisor – Mr. Lube/Jiffy Lube", duration: "1 year and 4 months", details: "Provided efficient vehicle maintenance and service, delivering excellent customer experiences during high-demand periods. Facilitated clear communication within the team to enhance workflow and operational efficiency. Monitored and managed inventory levels to ensure the availability of necessary products and tools. Adapted to various roles within the team, maintaining seamless operations and high service standards." }
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
