import React, { useState, useEffect } from 'react'
import '../App.css'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')

        if (!response.ok) {
          throw new Error('Failed to fetch testimonials')
        }

        const data = await response.json()

        // Map API data to our testimonial structure
        const formattedTestimonials = data.map((comment, index) => ({
          id: comment.id,
          name: comment.name.split(' ')[0], // Use first name only
          rating: Math.min(5, Math.max(1, Math.floor(Math.random() * 4) + 2)), // Random rating between 2-5
          review: comment.body,
          avatar: `https://i.pravatar.cc/150?img=${index + 10}`,
        }))

        setTestimonials(formattedTestimonials)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Handle navigation
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 3 + testimonials.length) % testimonials.length
    )
  }

  // Get testimonials to display
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  // If we don't have enough at the end, wrap around
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...testimonials.slice(0, 3 - visibleTestimonials.length)
    )
  }

  return (
    <div className="min-h-[500px] flex flex-col gap-6 md:gap-10 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-24 gap-4 md:gap-0">
        <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
          Our Happy Customers
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-500">Error loading testimonials: {error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center px-4">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              rating={testimonial.rating}
              name={testimonial.name}
              review={testimonial.review}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Testimonials
