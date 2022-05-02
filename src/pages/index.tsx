import type { NextPage } from 'next'
import { Advantages } from '../components/Advantages'
import { BigBanner } from '../components/BigBanner'
import { Dropdown } from '../components/Dropdown'
import { Header } from '../components/Header'
import { ImagesGrid } from '../components/ImagesGrid'
import { ProductCard } from '../components/ProductCard'
import { ProductsCarousel } from '../components/ProductsCarousel'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Dropdown /> 
      <BigBanner />
      <Advantages />
      <ImagesGrid />
      <ProductsCarousel />
      <h1>oiii</h1>
      <h1>oiii</h1>
      <h1>oiii</h1>
      <h1>oiii</h1>
      <h1>oiii</h1>
      <h1>oiii</h1>
      
      {/* <ProductCard /> */}
    </>
  )
}

export default Home
