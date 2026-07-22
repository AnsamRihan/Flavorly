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
          <div className='p-6 sm:p-12 bg-white rounded-2xl border border-[#E0C0AF]/30 shadow-[0_8px_24px_0_#2222220A]
          stack items-start gap-6'>
            
            {/*section title */}
            <div className='w-full flex items-start justify-start gap-2 xxs:gap-6 pb-6 border-b border-[#E0C0AF]/30'>
              
              <div className='rounded-lg bg-bg-tertiary p-2 xxs:p-[14.5px] center text-primary text-xs xxs:text-base'>
                <i className="fa-regular fa-star"></i>
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
                  <p className='text-sm sm:text-base text-heading-foreground'>
                    Access to 5,000+ curated recipes, basic
                    meal planning tools, and community
                    forums.
                  </p>
                </div>

                <div className='bg-bg-secondary rounded-lg p-6 stack items-start gap-1'>
                  <h3 className='uppercase text-primary font-semibold text-sm tracking-[0.7px]'>
                    MASTER CHEF
                  </h3>
                  <p className='text-sm sm:text-base text-heading-foreground'>
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

      {/*Billing Cycle Section */}
      <section className='pt-6'>
        <div className="container">
          <div className='p-6 sm:p-12 bg-white rounded-2xl border border-[#E0C0AF]/30 shadow-[0_8px_24px_0_#2222220A]
          stack items-start gap-6'>
            
            {/*section title */}
            <div className='w-full flex items-start justify-start gap-2 xxs:gap-6 pb-6 border-b border-[#E0C0AF]/30'>
              
              <div className='rounded-lg bg-bg-tertiary p-2 xxs:p-[14.5px] center text-primary text-xs xxs:text-base'>
                <i className="fa-regular fa-calendar-days"></i>
              </div>

              <div className='stack items-start gap-1'>
                <h2 className='capitalize text-heading-foreground text-xl xxs:text-2xl font-semibold'>
                  Billing Cycle
                </h2>
                <p className='text-sm sm:text-base'>
                  Clear, predictable billing schedules for your peace of mind.
                </p>
              </div>

            </div>

            {/*section info*/}
            <div className='w-full stack items-start gap-3'>

              <div className='flex gap-3'>
                <i class="fa-regular fa-circle-check text-primary pt-0.5"></i>

                <p className='text-sm sm:text-base'>
                  <span className='text-heading-foreground font-bold'>Automatic Renewal:</span> 
                  All subscriptions renew automatically at the end of each billing period
                  (monthly or annually) unless cancelled.
                </p>
              </div>

              <div className='flex gap-3'>
                <i class="fa-regular fa-circle-check text-primary pt-0.5"></i>

                <p className='text-sm sm:text-base'>
                  <span className='text-heading-foreground font-bold'>Payment Methods:</span> 
                  We accept major credit cards, PayPal, and digital wallets. Your payment method will 
                  be charged on the first day of your billing cycle.
                </p>
              </div>

              <div className='flex gap-3'>
                <i class="fa-regular fa-circle-check text-primary pt-0.5"></i>

                <p className='text-sm sm:text-base'>
                  <span className='text-heading-foreground font-bold'>Price Adjustments:</span> 
                  We reserve the right to change our pricing. Any price increases will only
                  apply to the next billing cycle following notification.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*Cancellation Policy Section */}
      <section className='pt-6'>
        <div className="container">
          <div className='p-6 sm:p-12 bg-white rounded-2xl border border-[#E0C0AF]/30 shadow-[0_8px_24px_0_#2222220A]
          stack items-start gap-6'>
            
            {/*section title */}
            <div className='w-full flex items-start justify-start gap-2 xxs:gap-6 pb-6 border-b border-[#E0C0AF]/30'>
              
              <div className='rounded-lg bg-bg-tertiary p-2 xxs:p-[14.5px] center text-primary text-xs xxs:text-base'>
                <i className="fa-regular fa-circle-xmark"></i>
              </div>

              <div className='stack items-start gap-1'>
                <h2 className='capitalize text-heading-foreground text-xl xxs:text-2xl font-semibold'>
                  Cancellation Policy
                </h2>
                <p className='text-sm sm:text-base'>
                  We believe in a no-pressure experience. Cancel anytime without hidden fees.
                </p>
              </div>

            </div>

            {/*section info*/}
            <div className='w-full stack items-start gap-6'>

              <div className='w-full bg-bg-secondary rounded-lg p-6 text-center'>
                <p className='text-sm sm:text-base text-heading-foreground italic'>
                  "You can cancel your Flavorly subscription at any time through your Account Settings. Your
                  access to premium features will continue until the end of your current paid billing period."
                </p>
              </div>

              <div className='w-full flex justify-around gap-12 flex-wrap text-center'>

                <div className='stack justify-center gap-1.5 '>
                  <i className="fa-solid fa-gear text-primary-foreground"></i>
                  <h3 className='capitalize font-semibold text-sm text-heading-foreground tracking-[0.7px]'>
                    Step 1
                  </h3>
                  <p className='text-xs capitalize'>
                    Go to Profile Settings
                  </p>
                </div>

                <div className='stack justify-center gap-1.5 '>
                  <i className="fa-solid fa-money-bills text-primary-foreground"></i>
                  <h3 className='capitalize font-semibold text-sm text-heading-foreground tracking-[0.7px]'>
                    Step 2
                  </h3>
                  <p className='text-xs capitalize'>
                    Select 'Subscription'
                  </p>
                </div>

                <div className='stack justify-center gap-1.5 '>
                  <i className="fa-solid fa-circle-minus text-primary-foreground"></i>
                  <h3 className='capitalize font-semibold text-sm text-heading-foreground tracking-[0.7px]'>
                    Step 3
                  </h3>
                  <p className='text-xs capitalize'>
                    Click 'Cancel Membership'
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
