import Logo from './logo'
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"

const phoneNumber = process.env.CONTACT_NUMBER

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">


        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://www.instagram.com/clensoft.on/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <div className='flex items-center justify-center w-[32px] h-[32px] shadow-md bg-white rounded-full'>
                  <BsInstagram />
                </div>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.linkedin.com/company/clensoft/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3Bg9UK7YWmSCynWEY900eYRQ%3D%3D" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <div className='flex items-center justify-center w-[32px] h-[32px] shadow-md bg-white rounded-full'>
                  <BsLinkedin />
                </div>
              </a>
            </li>
            <li className="ml-4">
              <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <div className='flex items-center justify-center w-[32px] h-[32px] shadow-md bg-white rounded-full'>
                  <BsWhatsapp />
                </div>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Clensoft. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
