import React from 'react'

export default function RecipeCard({recipe}) {
    const { publisher, image_url, title } = recipe;
    console.log(image_url);

    return (
        <div className='w-full stack gap-0 rounded-xl overflow-hidden bg-white'>
            <img src={image_url} alt={title}  className='w-full object-cover aspect-4/3'/>
            <div className='w-full p-6 flex flex-col justify-center gap-1'>
                <p className='uppercase text-primary text-xs font-semibold tracking-[0.7px]'>
                    {publisher}
                </p>
                <h3 className='text-heading-foreground text-xl font-semibold'>
                    {title}
                </h3>
            </div>
        </div>
    )
}
