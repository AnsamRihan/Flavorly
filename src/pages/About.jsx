import React from 'react'
import heroImage from "../assets/images/aboutUs/hero.svg";

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
    </>
  )
}
