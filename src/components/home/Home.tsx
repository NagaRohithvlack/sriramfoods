import React from 'react'
import LegacyPage from './legacy/LegacyPage'
import CategoriesPage from './categories/CategoriesPage'
import ShopPage from './shop/ShopPage'


// import CarouselMap from './carousel/CarouselMap'

export default function Home() {
  return (
    <>
    {/* <CarouselMap /> */}
    <LegacyPage />
    <CategoriesPage />
    <ShopPage />
    </>
  )
}
