import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='pt-16 pb-12 bg-bg-tertiary'>
      <div className="container">
        <div className='stack w-full gap-20'>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-12'>
            {/*Left Side */}
            <div className='stack items-start w-full gap-6 max-w-[301.72px]'>
              <Link to='/' className='text-primary font-semibold text-xl sm:text-2xl'>
                Flavorly
              </Link>

              <p className='text-primary-foreground text-base'>
                Empowering home cooks with refined recipes and essential kitchen guidance for every occasion.
              </p>

              <div className='row gap-6 text-secondary text-base justify-start'>
                <i className="fa-solid fa-earth-asia"></i>
                <i className="fa-solid fa-users"></i>
                <i className="fa-regular fa-square-caret-right"></i>
              </div>
            </div>

            {/*Right Side */}
            <div className='flex items-start justify-between gap-10 flex-wrap'>
              <div className='stack gap-3 items-start justify-start'>
                <h3 className='uppercase text-heading-foreground font-semibold text-sm tracking-[0.7px]'>
                  Explore
                </h3>
                <ul className='stack gap-3 items-start justify-start'>
                  <li className='footer-link'>
                    <Link to='/about'>About Us</Link>
                  </li>

                  <li className='footer-link'>
                    <Link to='#'>Recipes</Link>
                  </li>

                  <li className='footer-link'>
                    <Link to='#'>Cooking Guides</Link>
                  </li>
                </ul>
              </div>

              <div className='stack gap-3 items-start justify-start'>
                <h3 className='uppercase text-heading-foreground font-semibold text-sm tracking-[0.7px]'>
                  Legal
                </h3>
                <ul className='stack gap-3 items-start justify-start'>
                  <li className='footer-link'>
                    <Link to='#'>Privacy Policy</Link>
                  </li>

                  <li className='footer-link'>
                    <Link to='#'>Terms of Service</Link>
                  </li>

                  <li className='footer-link'>
                    <Link to='/subscriptionPolicy'>Supscription Policy</Link>
                  </li>
                </ul>
              </div>

              <div className='stack gap-3 items-start justify-start'>
                <h3 className='uppercase text-heading-foreground font-semibold text-sm tracking-[0.7px]'>
                  Support
                </h3>
                <ul className='stack gap-3 items-start justify-start'>
                  <li className='footer-link'>
                    <Link to='#'>Contact</Link>
                  </li>

                  <li className='footer-link'>
                    <Link to='#'>Help Center</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='pt-12 center border-t w-full border-[#E0C0AF]/30'>
            <p className='text-center'>
              © 2024 Flavorly. Crafted for culinary confidence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
