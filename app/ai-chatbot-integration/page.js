import React from 'react'
import Blog25 from '../components/blogs/blog25'
import AIChatbotFaq from '../components/FAQsforBlog/aIChatbotFaq'
export const metadata = {
  title: 'AI Chatbot Integration: Boost Engagement & UX ',
  description: 'Learn how to integrate AI chatbots with business systems to automate interactions, improve customer support, and streamline communication. ',
  keywords: ['AI chatbot integration for businessess', 'Chatbor integration with CRM systems', 'Benefits of AI chatbots for customer support', 'Enterprise chatbor integration solutions', 'Ai chatbor API integration', 'Chatbot automation for customer service', 'Integrating chatbots with websites and apps', 'AI chatbot implementation strategy', 'Conversational AI chatbot integration', 'Chatbot integration best practices'],
}
const page = () => {
  return (
    <div>
        <Blog25 />
        <AIChatbotFaq />
    </div>
  )
}

export default page