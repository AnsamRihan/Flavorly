import React from 'react'
import notFoundImage from './../assets/notFoundImage.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className='pb-20'>
      <div className="container center">
        <div className='stack gap-0 center w-full sm:max-w-2xl'>
          <img src={notFoundImage} alt="404 Not Found" className='aspect-square w-full max-w-100 object-contain'/>

          <div className='stack gap-3 text-center justify-center'>
            <p className='uppercase text-primary text-sm font-semibold'>
              ERROR 404
            </p>
            <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-[56px] font-bold text-heading-foreground tracking-[1.12px] text-wrap'>
              Something's Missing from the Pantry.
            </h1>
            <p className='text-primary-foreground text-lg max-w-lg mx-auto'>
              We couldn't find the page you were looking for. It might have been moved, deleted, or eaten by the chef's dog.
            </p>
          </div>

          <Link to='/' className='mt-12 btn-primary center gap-3'>
            <i className="fa-regular fa-house"></i>
            Return Home
          </Link>
        </div>
      </div>
    </section>
  )
}
