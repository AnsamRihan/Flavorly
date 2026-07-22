import React from 'react'
import heroImage from "../assets/images/aboutUs/hero.svg";
import aboutUsImage from "../assets/images/aboutUs/aboutUs.svg";

export default function About() {
  return (
    <>
      {/*Hero Section*/}
      <section className='h-[calc(100vh-80px)] w-full'>
         <div className='w-full h-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='container'>
              <div className='h-full stack justify-center items-start max-w-2xl py-10'>
                <p className='uppercase text-primary text-sm font-semibold tracking-[1.4px]'>
                  our story
                </p>
                <h1 className='font-bold text-4xl sm:text-5xl text-heading-foreground tracking-[-0.96px]'>
                  Crafting confidence in every kitchen.
                </h1>
                <p className='pt-4 pb-7 sm:pb-10 text-base sm:text-lg text-primary-foreground'>
                  Flavorly started with a simple belief: that everyone deserves to feel like a
                  master chef in their own home. We're more than a recipe site; we're your
                  culinary co-pilot.
                </p>
                <button className='btn-primary sm:px-20'>
                  Explore Our Journey
                </button>
              </div>
            </div>
          </div>
      </section>

      {/*About Us Section*/}
      <section className='py-20'>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-[1fr_2.5fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1.5fr] gap-0 sm:gap-10 lg:gap-20 '>
            <div className='order-2 sm:order-1 center items-start overflow-hidden'>
              <img src={aboutUsImage} alt="" className='rounded-4xl object-contain max-w-80 hidden sm:block sm:max-w-full'/>
            </div>

            <div className='order-1 sm:order-2 stack gap-12 items-start justify-start lg:justify-center'>
              <div className='stack gap-6 items-start'>
                <h2 className='text-[32px] font-bold text-heading-foreground tracking-[-0.32px]'>
                  Born from a passion for plate and palate.
                </h2>
                <p className='text-base text-primary-foreground'>
                  Flavorly was founded in 2020 by a group of chefs and digital designers who saw a
                  gap between complex professional recipes and the everyday home cook. We
                  wanted to bridge that gap with technology that inspires rather than intimidates.
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-6'>
                <div className='h-full rounded-xl bg-bg-tertiary border border-bg-tertiary/30 p-6 stack items-start gap-1'>
                  <i className="fa-regular fa-eye text-lg lg:text-2xl text-primary"></i>
                  <h3 className='text-lg lg:text-2xl font-semibold text-primary capitalize'>
                    Our Vision
                  </h3>
                  <p className='text-sm md:text-base text-primary-foreground'>
                    To become the world's most trusted companion for culinary
                    exploration and shared home dining experiences.
                  </p>
                </div>
                
                <div className='h-full rounded-xl bg-bg-tertiary border border-bg-tertiary/30 p-6 stack items-start gap-1'>
                  <i className="fa-regular fa-eye text-lg lg:text-2xl text-primary"></i>
                  <h3 className='text-lg lg:text-2xl font-semibold text-primary capitalize'>
                    Our Vision
                  </h3>
                  <p className='text-sm md:text-base text-primary-foreground'>
                    To become the world's most trusted companion for culinary
                    exploration and shared home dining experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Statistics Section*/}
      <section className='py-20 bg-bg-secondary'>
        <div className='container'>
          <div className='stack gap-20'>
            <div className='stack'>
              <h2 className='text-[32px] font-bold text-heading-foreground tracking-[-0.32px]'>
                Flavorly by the numbers
              </h2>
              <p className='max-w-132.25 text-center '>
                Growing every day, fueled by a global community of food lovers and experimenters.
              </p>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center'>

              <div className='h-full shadow-[0_8px_24px_0_#2222220A] bg-bg-primary p-12 rounded-4xl stack gap-1 justify-center'>
                <p className='text-primary font-bold text-5xl tracking-[-0.96px]'>
                  500+
                </p>
                <p className='uppercase text-sm font-semibold tracking-[1.4px]'>
                  HANDCRAFTED RECIPES
                </p>
              </div>

              <div className='h-full shadow-[0_8px_24px_0_#2222220A] bg-bg-primary p-12 rounded-4xl stack gap-1 justify-center'>
                <p className='text-primary font-bold text-5xl tracking-[-0.96px]'>
                  1M+
                </p>
                <p className='uppercase text-sm font-semibold tracking-[1.4px]'>
                  ACTIVE USERS
                </p>
              </div>

              <div className='h-full shadow-[0_8px_24px_0_#2222220A] bg-bg-primary p-12 rounded-4xl stack gap-1 justify-center'>
                <p className='text-primary font-bold text-5xl tracking-[-0.96px]'>
                  4.9
                </p>
                <p className='uppercase text-sm font-semibold tracking-[1.4px]'>
                  APP STORE RATING
                </p>
              </div>

              <div className='h-full shadow-[0_8px_24px_0_#2222220A] bg-bg-primary p-12 rounded-4xl stack gap-1 justify-center'>
                <p className='text-primary font-bold text-5xl tracking-[-0.96px]'>
                  150K
                </p>
                <p className='uppercase text-sm font-semibold tracking-[1.4px]'>
                  PHOTOS SHARED
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
