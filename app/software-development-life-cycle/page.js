import React from 'react'
import Blog29 from '../components/blogs/blog29'
import SDLCfaq from '../components/FAQsforBlog/SDLCfaq'
export const metadata = {
  title: 'Software Development Life Cycle (SDLC): Full Guide',
  description: 'Explore SDLC phases, models and how DevOps and CI/CD improve software development from planning through testing to deployment and maintenance. ',
  keywords: ['software development life cycle explained','Phases of SDLC with examples','SDLC models comparison waterfall agile ','role of DevOps in SDLC ','SDLC best practices for enterprises ','agile vs traditional SDLC models ','SDLC process for web applications ','importance of SDLC in software engineering ','SDLC stages from planning to maintenance ','modern software development life cycle approach '],
}
const page = () => {
  return (
    <div>
        <Blog29/>
        <SDLCfaq/>
    </div>
  )
}

export default page