import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../services/RecipeApi';
import RecipeCard from '../components/RecipeCard/RecipeCard';

import heroImage from './../assets/images/recipes/hero.svg'

export default function Recipes() {
  const params = new URLSearchParams(location.search);
  const search = params.get('search');

  const {data, isError, isLoading, error} = useQuery({
    queryKey:['recipes', search],
    queryFn: () => getRecipes(search),
    staleTime:1000 * 60 * 5,
  });

  
  if (isLoading) {
    return (
      <div className="center py-20">
        <span className="loader"></span>
      </div>
    );
  }

  if (isError || data?.data.recipes.length === 0) {
    return (
      <div className="py-20 center">
        <p className="text-red-500 text-base">
          Error getting data!
        </p>
      </div>
    );
  }

  return (
    <>
      {/*Hero Section*/}
      <section className='h-[calc(100vh-80px)] w-full'>
        <div className='w-full h-full bg-no-repeat bg-cover bg-bottom' style={{ backgroundImage: `url(${heroImage})` }}>
          <div className='container center'>
            <div className='w-full h-full stack justify-center max-w-167.75 py-15 gap-6 text-center'>
              <h1 className='text-white capitalize text-4xl sm:text-5xl font-bold tracking-[-0.96px]'>
                {search}
              </h1>
              <p className='text-white text-base md:text-lg font-bold'>
                {data.results+" "}Recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Recipes Section */}
      <section className='py-20'>
        <div className="container">
          <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {data?.data.recipes.length > 0 && (
              data.data.recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
