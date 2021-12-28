import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useTrans from '../libs/hooks/useTrans'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeBanner from '../components/index/home-banner/home-banner'
import OurServices from '../components/index/our-services/our-services'
import PortfolioSsection from '../components/index/portfolio-section/portfolio-section'
import BannerSection from '../components/index/banner-section/banner-section'
import LastestArrivals from '../components/index/lastest_arrivals/lastest_arrivals'
// import SearchBoxOverlay from '../components/index/search-box-overlay/search-box-overlay'
// import CartBoxOverlay from '../components/index/cart-box-overlay/cart-box-overlay'
const Home: NextPage = () => {

  // const t = useTrans();
  // const router = useRouter();

  // const changeLang = (lang: string) => {
  //     // router.push('/', '/', { locale: lang })
  //     router.push(router.asPath, router.asPath, { locale: lang })
  // }

  // const handleClick = () => {
  //   console.log('router:', router);
    
  // }

  return (
    <>
    <HomeBanner/>
    <OurServices/>
    <PortfolioSsection/>
    <BannerSection/>
    <LastestArrivals/>
    {/* <SearchBoxOverlay/>
    <CartBoxOverlay/> */}
    </>
  )
}

export default Home
