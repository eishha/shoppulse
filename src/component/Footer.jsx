import '../App.css'
import ContactForm from './ContactForm'
const icons = [
  '/github.svg',
  '/fb.svg',
  '/insta.svg',
  '/twitter.svg',
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-[700px] flex flex-col bg-white">
      <div className="flex-1/4 -mb-20 md:-mb-40">
        <ContactForm />
      </div>

      <div className="flex-3/4 bg-[#F0F0F0] w-full min-h-[500px] flex flex-col gap-6 p-4 md:p-8 lg:p-24">
        <div className="flex flex-col md:flex-row mt-8 md:mt-14 gap-6 flex-1/4">
          <div className="flex flex-col w-full md:w-1/3 gap-6">
            <h1 className="font-montserrat font-extrabold text-2xl md:text-3xl lg:text-4xl">
              SHOPPULSE
            </h1>
            <p className="lightText">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex flex-row gap-5">
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt="" />
              ))}
            </div>
          </div>
          <div className="flex-1 md:ml-6">
            <FooterCard />
          </div>
        </div>
        <div className="h-[1px] bg-gray-300"></div>

        <div className="lightText">
          Shoppulse &copy; {currentYear}. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

const FooterCard = () => {
  const menuDetails = [
    {
      menu: ' COMPANY',
      Services: ['About', 'Features', 'Works', 'Career'],
    },
    {
      menu: 'HELP',
      Services: [
        'Customer Support',
        'Delivery Details',
        'Terms & Conditions',
        'Privacy Policy',
      ],
    },

    {
      menu: 'FAQ',
      Services: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      {menuDetails.map((menuDetail, index) => (
        <ul key={index} className="flex flex-col gap-4 md:gap-6">
          <li className="font-medium tracking-[2px] md:tracking-[3px] text-sm md:text-base">
            {menuDetail.menu}
          </li>
          <ul className="flex flex-row flex-wrap md:flex-col gap-3 ">
            {menuDetail.Services.map((service, serviceIndex) => (
              <li
                key={serviceIndex}
                className="leading-6 md:leading-8 lightText text-sm md:text-base"
              >
                {service}
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  )
}

export default Footer
