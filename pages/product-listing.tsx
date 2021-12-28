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
import SearchBoxOverlay from '../components/index/search-box-overlay/search-box-overlay'
import CartBoxOverlay from '../components/index/cart-box-overlay/cart-box-overlay'
const ProductListing: NextPage = () => {

  

  return (
    <>
   <section id="slider-sec" className="slider-sec parallax">
</section>
{/* <!--slider sec end-->

<!--Product Line Up Start --> */}
 <style jsx>{`
       #slider-sec{
        background:url('/book-shop/img/banner1.2.jpg');
        width:100%;
        height:100%;
       }
       .price-num{
        color: #0b2e13;
       }

      `}</style>
<div className="product-listing">
    <div className="container">
        <div className="row no-gutters">

            {/* <!-- START STICKY NAV --> */}
            <div className="col-12 col-lg-4 order-2 order-lg-1 sticky">
                <div id="product-filter-nav" className="product-filter-nav mb-3">
                    <div className="product-category">
                        <h5 className="filter-heading  text-center text-lg-left">Category</h5>
                        <ul>
                            <li><a href="javascript:void(0)">June </a><span>(2)</span></li>
                            <li><a href="javascript:void(0)">July </a><span>(4)</span></li>
                            <li><a href="javascript:void(0)">Augest </a><span>(2)</span></li>
                            <li><a href="javascript:void(0)">March </a><span>(7)</span></li>
                            <li><a href="javascript:void(0)">May </a><span>(9)</span></li>
                        </ul>
                    </div>
                    <div className="product-price mt-1">
                        <h5 className="filter-heading">Shop By</h5>
                        <div id="slider-range"></div>
                        <p className="price-num" >Price: <span id="min-p"></span>  <span id="max-p"></span></p>
                    </div>

                    <button className="btn yellow-color-green-gradient-btn mt-1">Filter</button>

                    <div className="product-add mt-4">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <img src="/book-shop/img\advertisement.jpg" alt="images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END STICKY NAV -->

            <!-- START PRODUCT COL 8 --> */}
            <div className="col-md-12 col-lg-8 order-1 order-lg-2">
                <div className="row">

                    {/* <!-- START LISTING HEADING --> */}
                    <div className="col-12 product-listing-heading">
                        <h1 className="heading text-left">Product Listing</h1>
                        <p className="para_text text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus lacus faucibus lectus, sed cursused eros ligula non odio.</p>
                    </div>
                    {/* <!-- END LISTING HEADING -->

                    <!-- START PRODUCT LISTING SECTION --> */}
                    <div className="col-12 product-listing-products">

                        {/* <!-- START DISPLAY PRODUCT --> */}
                        <div className="product-list row">

                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                            <img src="/book-shop/img\book-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-1-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> So Sad Today </a></h4>
                                    <p className="text-center p-item-price">$100.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                            <img src="/book-shop/img\book-2-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                            <img src="/book-shop/img\book-2-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> The Last Stand </a></h4>
                                    <p className="text-center p-item-price">$600.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-3-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-3.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> Love Does </a></h4>
                                    <p className="text-center p-item-price">$150.00</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-4.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-4-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html">The Imortal Rules </a></h4>
                                    <p className="text-center p-item-price">$400.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-5-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-5.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html">As I lay Dying </a></h4>
                                    <p className="text-center p-item-price">$100.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-6-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-6.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> No One Belongs </a></h4>
                                    <p className="text-center p-item-price">$500.00</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-2.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-2-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> Life Without Money </a></h4>
                                    <p className="text-center p-item-price">$200.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-6.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-6-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html"> Brave New World </a></h4>
                                    <p className="text-center p-item-price">$120.00</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 manage-color-hover wow slideInUp" data-wow-delay=".2s">
                                <div className="product-item owl-theme product-listing-carousel owl-carousel">
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-1-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item p-item-img">
                                        <img src="/book-shop/img\book-1.jpg" alt="images"/>
                                        <div className="text-center d-flex justify-content-center align-items-center">
                                            <a className="listing-cart-icon" href="shop-cart.html">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-item-detail">
                                    <h4 className="text-center p-item-name"><a href="product-detail.html">The Joke </a></h4>
                                    <p className="text-center p-item-price">$150.00</p>
                                </div>
                            </div>



                        </div>
                        {/* <!-- END DISPLAY PRODUCT --> */}


                    </div>
                    {/* <!-- END PRODUCT LISTING SECTION --> */}
                </div>
            </div>
            {/* <!-- END PRODUCT COL 8 --> */}

        </div>
    </div>
</div>
<script src="..\vendor\js\bundle.min.js"></script>
{/* <!-- Plugin Js --> */}
<script src="/vendor\js\jquery.fancybox.min.js"></script>
<script src="/vendor\js\owl.carousel.min.js"></script>
<script src="/vendor\js\swiper.min.js"></script>
<script src="/vendor\js\jquery.cubeportfolio.min.js"></script>
<script src="/vendor\js\wow.min.js"></script>
<script src="/vendor\js\bootstrap-input-spinner.js"></script>
<script src="/vendor\js\parallaxie.min.js"></script>
<script src="/vendor\js\stickyfill.min.js"></script>
<script src="/book-shop/js\nouislider.min.js"></script>
{/* <!-- Custom Script --> */}
<script src="/book-shopjs\script.js"></script>
    </>
  )
}

export default ProductListing
