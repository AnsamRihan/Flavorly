import React from 'react'
import heroImage from "./../assets/images/homePage/hero.svg";
import SearchBar from '../components/SearchBar/SrearchBar';

export default function Home() {
  return (
    <>
      {/*Hero Section*/}
      <section className='h-[calc(100vh-80px)] w-full'>
        <div className='w-full h-full bg-no-repeat bg-cover bg-bottom' style={{ backgroundImage: `url(${heroImage})` }}>
          <div className='container center'>
            <div className='w-full h-full stack justify-center max-w-167.75 py-15 gap-6 text-center'>
              <h1 className='text-on-primary capitalize text-4xl sm:text-5xl font-bold tracking-[-0.96px]'>
                Culinary Confidence at Your Fingertips
              </h1>
              <p className='text-on-primary text-base md:text-lg'>
                Discover thousands of chef-curated recipes, tailored to your taste and skill level.
              </p>
              
              <SearchBar  />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
