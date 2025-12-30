import React from 'react'
import Blog24 from '../components/blogs/blog24'
import DataEngineeringFaq from '../components/FAQsforBlog/dataEngineeringFaq'

export const metadata = {
  title: 'Data Engineering: Build Reliable Data Systems ',
  description: 'Data Engineering: Build Reliable Data Systems Overview of data engineering practices that gather, clean, and structure data for analytics, machine learning, and enterprise decision-making.  ',
  keywords: ['data engineering services for enterprises','data engineering vs data sciences','Modern data engineering architecture','data pipeline design best practices','big data engineering solutions','ETL processes in data engineering','Cloud data engineering for machine learning','Scalable data engineering systems','cloud data engineering platforms','Role of data engineering in AI and analytics'],
}
const page = () => {
  return (
    <div>
        <Blog24 />
        <DataEngineeringFaq />
    </div>
  )
}

export default page