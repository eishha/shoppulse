import React from 'react'
import '../App.css'

const TestimonialCard = ({ rating, name, review, avatar }) => {
  // Generate star rating display
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="flex flex-col w-full max-w-md h-48 md:h-64 bg-white border border-gray-200 rounded-2xl p-4 md:p-8 gap-3 md:gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gray-200">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-base md:text-lg font-bold">{name}</p>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
      <p className="text-gray-600 mt-2 line-clamp-3 md:line-clamp-4 text-sm md:text-base">{review}</p>
    </div>
  )
}

export default TestimonialCard
