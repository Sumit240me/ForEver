import React from 'react'
import Title from '../components/Title.jsx'
import NewsLetterBox from '../components/NewsLetterBox.jsx'
import { assets } from '../assets/assets/frontend_assets/assets.js'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever is not just a clothing brand—it’s a feeling stitched into fabric. Built on the idea that style never fades, Forever represents timeless fashion blended with modern expression. Every piece is designed to capture moments that last, turning everyday wear into something meaningful.</p>
            <p>Inspired by the fast-changing world of fashion, much like brands such as Forever 21 that bring new trends rapidly to customers , Forever takes a slightly different path—combining trend awareness with long-lasting identity. It focuses on creating clothing that feels personal, comfortable, and expressive.</p>
            <b className='text-gray-800 '>Our Mission</b>
            <p>The essence of Forever lies in simplicity and confidence. Whether it’s a minimal hoodie, a statement tee, or a classic jacket, each design tells a story of individuality. The brand believes that clothes are more than just outfits—they are a way to communicate who you are without saying a word.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='bordeer px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>The quality of a clothing brand defines its true value beyond just appearance. A high-quality brand focuses on premium fabrics, strong stitching, and attention to detail in every piece. The materials used are carefully selected to ensure durability, comfort, and long-term wearability.</p>
        </div>
        <div className='bordeer px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Convenience is one of the most important aspects of a modern clothing brand. It is not just about how clothes look, but how easily they fit into everyday life. A convenient clothing brand focuses on saving time, effort, and energy for its customers, making fashion simple and accessible.</p>
      </div>
      <div className='bordeer px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>A good clothing brand focuses on clear communication, quick responses, and helpful assistance. Whether it is answering product queries, handling returns, or resolving issues, efficient service builds trust and confidence. Customers are more likely to stay loyal to a brand that treats them with respect and care</p>
      </div>
    </div>

    <NewsLetterBox />

    </div>
  )
}

export default About
