import React, { useState } from 'react'
import '../App.css'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    // Form submission logic would go here (API call, etc.)
    console.log('Submitting email:', email)

    // Show success message
    setSubmitted(true)
    setError('')
    setEmail('')

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="px-4 md:px-8 lg:px-24 relative w-full">
      <div className="bg-black shadow-gray-700 flex flex-col md:flex-row justify-between min-h-32 md:h-44 rounded-2xl text-white py-8 md:py-11 px-6 md:px-16 gap-6 md:gap-0">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold w-full md:w-1/2 text-center md:text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('') // Clear error when typing
            }}
            placeholder="Enter your email..."
            className="p-2 px-6 w-full md:w-80 bg-white rounded-full text-gray-800 placeholder-gray-400"
          />
          {error && (
            <p className="text-red-400 text-sm absolute top-12 left-0">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="p-2 px-6 w-full md:w-80 bg-white rounded-full text-black hover:bg-gray-100 transition-colors"
          >
            {submitted ? 'Subscribed!' : 'Subscribe to Newsletter'}
          </button>

          {submitted && (
            <p className="text-green-400 text-sm absolute bottom-12 left-0">
              Thank you for subscribing!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
