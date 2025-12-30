import React from 'react'
import Blog30 from '../components/blogs/blog30'
import HumanSideFaq from '../components/FAQsforBlog/humanSideFaq'

export const metadata = {
  title: 'Human Side of AI Projects: Managing Teams & Change',
  description: 'Learn how to lead AI projects successfully by focusing on people, handling fears, building trust, and guiding teams through digital transformation.',
  keywords: ['human side of artificial intelligence projects', 'managing teams in AI projects ','change management in AI implementation', 'people challenges in AI transformation ','leadership skills for AI projects','building trust in AI adoption ','ethical and cultural issues in AI projects ','AI project management best practices ','employee resistance to AI solutions', 'human centered approach to AI development'],
}

const page = () => {
  return (
    <div>
      <Blog30 />
      <HumanSideFaq />
    </div>
  )
}

export default page
