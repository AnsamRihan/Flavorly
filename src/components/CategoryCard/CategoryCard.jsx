import React from 'react'
import { Link } from "react-router-dom";

export default function CategoryCard({ image, title}) {
  return (
    <Link to={`/recipes?search=${title}`} className='cursor-pointer'>
        <div className='center flex-col gap-3'>
            <img src={image} alt={title} className='rounded-[20px] aspect-square w-full object-cover'/>
            <h3 className='capitalize text-heading-foreground font-semibold text-sm tracking-[0.7px]'>
            {title}
            </h3>
        </div>
    </Link>
  )
}
