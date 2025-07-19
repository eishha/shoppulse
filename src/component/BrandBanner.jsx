import React from 'react'
import Marquee from 'react-fast-marquee'

const BrandBanner = () => {
  const imgPaths = [
    '/versace-logo.svg',
    '/zara-logo-1-1.svg',
    '/prada-logo-1-1.svg',
    '/gucci-logo-1-1.svg',
    '/calvinklein-logo.svg',
  ]
  return (
    <Marquee speed={50} pauseOnHover={true}>
      <div className="bg-black h-24 md:h-36 w-full flex flex-row justify-evenly items-center py-4 md:py-8 px-4 md:px-8">
        {imgPaths.map((path, index) => (
          <div key={index} className="mx-4 md:mx-8">
            <img src={path} alt="" className="h-8 md:h-12 w-auto" />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default BrandBanner
