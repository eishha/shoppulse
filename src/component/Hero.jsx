import React from 'react'

const Hero = () => {
  const numbers = [
    { num: '200+', text: 'International Brands' },
    { num: '2,000+', text: 'High Quality Products' },
    { num: '30,000+', text: 'Happy Customers' },
  ]

  return (
    <div>
      <div className="relative h-fit md:h-screen">
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/Rectangle.svg)` }}
        ></div>

        {/* Content container */}
        <div className="flex flex-col gap-8 relative z-10 px-4 pt-16 md:pt-24 max-w-xl ml-8 md:ml-16">
          <h1 className="heading text-3xl md:text-5xl lg:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="my-4 md:my-8 text-sm md:text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button
            className="bg-black w-full rounded-full py-4 text-white text-lg font-semibold mb-8  transition-all duration-300 transform
                      hover:bg-gray-800 hover:scale-105
                      active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
          >
            Shop Now
          </button>
          <div className="flex flex-row justify-between items-center mb-8">
            {numbers.map((data, idx) => (
              <div
                key={idx}
                className={`flex-1 text-center ${
                  idx !== 0 ? 'border-l border-gray-300' : ''
                }`}
              >
                <h3 className="text-xl font-extrabold">{data.num}</h3>
                <p className="text-xs text-gray-500">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
