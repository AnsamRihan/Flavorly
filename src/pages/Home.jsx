import React from 'react'
import heroImage from "./../assets/images/homePage/hero.svg";
import SearchBar from '../components/SearchBar/SrearchBar';

import pizzaImage from './../assets/images/homePage/pizza.webp'
import hamburgerImage from './../assets/images/homePage/hamburger.jpg'
import pastaImage from './../assets/images/homePage/pasta.jpg'
import saladImage from './../assets/images/homePage/salad.jpg'
import pieImage from './../assets/images/homePage/pie.jpg'
import cakeImage from './../assets/images/homePage/cake.webp'

import CategoryCard from '../components/CategoryCard/CategoryCard';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { getRecipes } from '../services/RecipeApi';
import { useQuery } from '@tanstack/react-query';

export default function Home() {

  const {data, isError, isLoading, error} = useQuery({
    queryKey:['recipes', 'Pizza'],
    queryFn: () => getRecipes('pizza'),
    staleTime:1000 * 60 * 5,
  });

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

      {/*Categories Section */}
      <section className='py-20'>
        <div className='container'>
          <div className='w-full stack gap-12'>
            {/*Section title */}
            <div className='w-full stack items-start gap-1'>
              <h2 className='text-heading-foreground text-[32px] font-bold tracking-[-0.32px]'>
                Explore by Category
              </h2>
              <div className='w-full flex justify-between gap-4'>
                <p className='text-sm sm:text-base'>
                  Find exactly what you're craving today.
                </p>

                <button className='text-primary center gap-1 capitalize font-semibold hover:text-secondary
                text-sm tracking-[0.7px]'>
                  View All
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/*Categories */}
            <div className='w-full grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6'>

              <CategoryCard image={pizzaImage} title={'pizza'} />
              <CategoryCard image={hamburgerImage} title={'hamburger'} />
              <CategoryCard image={pastaImage} title={'pasta'} />
              <CategoryCard image={saladImage} title={'salad'} />
              <CategoryCard image={pieImage} title={'pie'} />
              <CategoryCard image={cakeImage} title={'cake'} />
              
            </div>
          </div>
        </div>
      </section>

      {/*Trending Recipes Section */}
      <section className='py-20 bg-bg-secondary'>
        <div className='container'>
          <div className='w-full stack gap-12'>
            {/*Section title */}
            <div className='w-full center justify-start gap-3'>
              <i className="fa-solid fa-arrow-trend-up text-primary"></i>
              <h2 className='text-heading-foreground text-[32px] font-bold tracking-[-0.32px]'>
                Trending Recipes
              </h2>
            </div>

            {/*Recipes */}
            <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {isLoading && (
                <div className="col-span-full center">
                  <span className="loader"></span>
                </div>
              )}

              {isError && (
                <p className="text-red-500 text-base">
                  Error getting data!
                </p>
              )}

              {data?.data.recipes.length === 0 && (
                <p className="text-red-500 text-base">
                  Error getting data!
                </p>
              )}

              {data?.data.recipes.length > 0 && (
                data.data.recipes.slice(0, 4).map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
