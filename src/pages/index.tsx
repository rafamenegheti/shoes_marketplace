import type { NextPage } from 'next'
import { Advantages } from '../components/Advantages'
import { BigBanner } from '../components/BigBanner'
import { Dropdown } from '../components/Dropdown'
import { Header } from '../components/Header'
import { ImagesGrid } from '../components/ImagesGrid'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Dropdown /> 
      <BigBanner />
      <Advantages />
      <ImagesGrid />
    </>
  )
}

export default Home
