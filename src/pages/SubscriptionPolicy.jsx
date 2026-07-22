import React from 'react'

export default function SubscriptionPolicy() {
  return (
    <>
      {/*Title Section */}
      <section className='pt-12 pb-6'>
        <div className="container">
          <div className='stack items-start gap-3 w-full'>
            
            <h1 className='text-[30px] xs:text-4xl sm:text-5xl font-bold tracking-[0.96px] text-heading-foreground'>
              Subscription Policy
            </h1>

            <p className='max-w-166.25'>
              Our goal is to provide culinary confidence through clear and transparent
              subscription terms. Learn about our plans, billing cycles, and how we handle
              your culinary journey.
            </p>

            <div className='pt-3 row gap-3 justify-start text-center'>

              <div className='bg-primary/5 circle border border-primary/10 text-primary text-xs xs:text-sm font-semibold
              tracking-[0.7px] px-3 py-1'>
                <p className='capitalize'>
                  Last Updated: May 2024
                </p>
              </div>

              <div className='bg-primary/5 circle border border-primary/10 text-primary text-xs xs:text-sm font-semibold
              tracking-[0.7px] px-3 py-1'>
                <p className='capitalize'>
                  Version 2.1
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*Subscription Plans Section */}
      <section className='pt-6'>
        <div className="container">
          <div className='p-12 bg-white rounded-2xl border border-[#E0C0AF]/30 shadow-[0_8px_24px_0_#2222220A]
          stack items-start gap-6'>
            
            {/*section title */}
            <div className='w-full flex items-start justify-start gap-2 xxs:gap-6 pb-6 border-b border-[#E0C0AF]/30'>
              
              <div className='rounded-lg bg-bg-tertiary p-2 xxs:p-[14.5px] center text-primary text-xs xxs:text-base'>
                <i class="fa-regular fa-star"></i>
              </div>

              <div className='stack items-start gap-1'>
                <h2 className='capitalize text-heading-foreground text-xl xxs:text-2xl font-semibold'>
                  Subscription Plans
                </h2>
                <p className='text-sm sm:text-base'>
                  Flavorly offers various subscription tiers designed to elevate your home cooking experience.
                </p>
              </div>

            </div>

            {/*section info*/}
            <div className='w-full stack items-start gap-6'>

              <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6'>

                <div className='bg-bg-secondary rounded-lg p-6 stack items-start gap-1'>
                  <h3 className='uppercase text-primary font-semibold text-sm tracking-[0.7px]'>
                    BASIC TASTE
                  </h3>
                  <p className='text-sm sm:text-base'>
                    Access to 5,000+ curated recipes, basic
                    meal planning tools, and community
                    forums.
                  </p>
                </div>

                <div className='bg-bg-secondary rounded-lg p-6 stack items-start gap-1'>
                  <h3 className='uppercase text-primary font-semibold text-sm tracking-[0.7px]'>
                    MASTER CHEF
                  </h3>
                  <p className='text-sm sm:text-base'>
                    Unlimited recipe access, professional
                    video masterclasses, personalized AI
                    meal plans, and offline mode.
                  </p>
                </div>

              </div>

              <p className='text-sm sm:text-base'>
                Subscription features are subject to change. We will notify you via the email address associated
                with your account at least 30 days before any material changes to your plan's core features take
                effect.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
