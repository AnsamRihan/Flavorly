import React from 'react'

export default function SubscriptionPolicy() {
  return (
    <>
      {/*Title Section */}
      <section className='pt-12 pb-20'>
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
    </>
  )
}
