import React,{useState} from 'react'

const NewsLetterBox = () => {

     const [submitted, setSubmitted] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-shadow-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor, quia molestiae odio eius nemo deserunt dolore rem, beatae aperiam sequi fuga 
      </p>

      <form 
      onSubmit={onSubmitHandler} 
      className='relative w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-3xl overflow-hidden'
    >

      {/* Input */}
      <input 
        className={`w-full sm:flex-1 outline-none transition-all duration-500 ${
          submitted ? 'opacity-0' : 'opacity-100'
        }`}
        type='email' 
        placeholder='Enter your email' 
        required 
      />

      {/* Button */}
      <button 
        type='submit' 
        className={`absolute right-0 h-full bg-black text-white text-xs px-10 rounded-3xl 
        transition-all duration-5000 ease-in-out flex items-center justify-center
        ${submitted ? 'w-full left-0 rounded-3xl' : 'w-auto'}
        `}
      >
        {submitted ? "SUBMITTED" : "SUBSCRIBE"}
      </button>

    </form>
    </div>
  )
}

export default NewsLetterBox
