import React from 'react'
import Blog22 from '../components/blogs/blog22'
import CICDPipelineFaq from '../components/FAQsforBlog/cICDPipelineFaq'
export const metadata = {
  title: 'CI/CD Explained: Pipeline, Benefits & Workflow Guide ',
  description: 'Understand Continuous Integration & Deployment workflows, benefits, tools, and how CI/CD accelerates software delivery and quality.  ',
  keywords: ['continuous integration and continuous deployment explained ','CI/CD pipeline best practices ','benefits of CI/CD in DevOps ','CI/CD tools for modern software development ','how CI/CD improves software quality ','automated testing in CI/CD pipelines','CI/CD workflow step by step ','DevOps CI/CD implementation guide ','continuous delivery vs continuous deployment ','CI/CD for agile development teams '],
}
const page = () => {
  return (
    <div>
      <Blog22/>
      <CICDPipelineFaq/>
    </div>
  )
}

export default page
