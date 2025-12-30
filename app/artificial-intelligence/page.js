import React from 'react'
import Blog23 from '../components/blogs/blog23'
import ArtificialFaq from '../components/FAQsforBlog/ArtificialFaq'
export const metadata = {
  title: 'Artificial Intelligence: Tech, Tools & Impact ',
  description: 'A high-level introduction to artificial intelligence, how it works, its applications, and how businesses can leverage AI for innovation.  ',
  keywords: ['artificial intelligence solutions for businesses','how artificial intelligence works','applications of artificial intelligence in industry','Benefits of AI in digital transformation','Artificial intelligence technologies and tools','AI use cases across industries','Machine learning vs artificial intelligence','future of artificial intelligence in business','benefits of AI for enterprises','AI adoption strategy for companies'],
}
const page = () => {
  return (
    <div>
      <Blog23/>
      <ArtificialFaq/>
    </div>
  )
}

export default page
