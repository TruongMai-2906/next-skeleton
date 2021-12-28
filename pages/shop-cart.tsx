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
const ShopCart: NextPage = () => {

  

  return (
    <>
    <section id="slider-sec" className="slider-sec parallax">
</section>
{/* <!--slider sec end-->

<!-- START HEADING SECTION --> */}
{/* background: url('img/banner1.3.jpg'); */}
 <style jsx>{`
       #slider-sec{
        background:url('/book-shop/img/banner1.3.jpg');
        width:100%;
        height:100%;
       }
       .cart_table{
        visibility: visible;
         animation-delay: 300ms; 
         animation-name: fadeInUp;
       }
      `}</style>

<div className="about_content">

<div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-10  text-center text-lg-left wow slideInUp" data-wow-duration="2s">
            <h1 className="heading">Get Ready For Checkout?</h1>
            <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident consectetur adipisicing elit quam reiciendis voluptatum?</p>
        </div>
    </div>
</div>


{/* <!-- START SHOP CART SECTION --> */}
<div className="shop-cart wow slideInUp" data-wow-duration="2s">
    <div className="container">
        {/* <!-- START SHOP CART TABLE --> */}
        <div className="row pt-5">
            <div className="col-12 col-md-12  cart_table wow fadeInUp animated" data-wow-delay="300ms">
                <div className="table-responsive">
                    <table className="table table-bordered border-radius">
                        <thead>
                        <tr>
                            <th className="darkcolor">Product</th>
                            <th className="darkcolor">Price</th>
                            <th className="darkcolor">Quantity</th>
                            <th className="darkcolor">Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="d-table product-detail-cart">

                                    <div className="media">
                                        <div className="row no-gutters">

                                            <div className="col-12 col-lg-2 product-detail-cart-image">
                                            <a className="shopping-product" href="javascript:void(0)"><img src="/book-shop/img/shopcart-1.jpg" alt="Generic placeholder image"/></a>
                                            </div>

                                            <div className="col-12 col-lg-10 mt-auto product-detail-cart-data">
                                                <div className="media-body ml-lg-3">
                                                    <h4 className="product-name"><a href="product-detail.html">Love Does</a></h4>
                                                    <p className="product-des">We offer the most complete in the country</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center amount">$130.00</h4>
                            </td>
                            <td className="text-center">
                                <div className="quote text-center mt-1">
                                    <input type="number" placeholder="1" className="quote" min="1" max="100"/>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center amount">$136.00</h4>
                            </td>
                            <td className="text-center"><a className="btn-close" href="javascript:void(0)"><i className="lni-trash"></i></a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-table product-detail-cart">

                                    <div className="media">
                                        <div className="row no-gutters">

                                            <div className="col-12 col-lg-2 product-detail-cart-image">
                                                <a className="shopping-product" href="javascript:void(0)"><img src="/book-shop/img/shopcart-2.jpg" alt="Generic placeholder image"/></a>
                                            </div>

                                            <div className="col-12 col-lg-10 mt-auto product-detail-cart-data">
                                                <div className="media-body ml-lg-3">
                                                    <h4 className="product-name"><a href="product-detail.html">The Last Stand</a></h4>
                                                    <p className="product-des">We offer the most complete in the country</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center d-table-price amount">$100.00</h4>
                            </td>
                            <td className="text-center">
                                <div className="quote text-center mt-1">
                                    <input type="number" placeholder="1" className="quote" min="1" max="100"/>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center amount">$106.00</h4>
                            </td>
                            <td className="text-center"><a className="btn-close" href="javascript:void(0)"><i className="lni-trash"></i></a></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-table product-detail-cart">

                                    <div className="media">
                                        <div className="row no-gutters">

                                            <div className="col-12 col-lg-2 product-detail-cart-image">
                                                <a className="shopping-product" href="javascript:void(0)"><img src="/book-shop/img/shopcart-1.jpg" alt="Generic placeholder image"/></a>
                                            </div>

                                            <div className="col-12 col-lg-10 mt-auto product-detail-cart-data">
                                                <div className="media-body ml-lg-3">
                                                    <h4 className="product-name"><a href="product-detail.html">The Road</a></h4>
                                                    <p className="product-des">We offer the most complete in the country</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center d-table-price amount">$150.00</h4>
                            </td>
                            <td className="text-center">
                                <div className="quote text-center mt-1">
                                    <input type="number" placeholder="1" className="quote" min="1" max="100"/>
                                </div>
                            </td>
                            <td>
                                <h4 className="text-center amount">$150.00</h4>
                            </td>
                            <td className="text-center"><a className="btn-close" href="javascript:void(0)"><i className="lni-trash"></i></a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="apply_coupon">
                    <div className="row">
                        <div className="col-12 text-left">
                            <a href="shop-cart.html" className="btn yellow-color-green-gradient-btn">UPDATE</a>
                            <a href="shop-cart.html" className="btn green-color-yellow-gradient-btn ">CHECKOUT</a>
                        </div>
{/* <!--                            <div className="col-6  coupon text-left">-->
<!--                                <a href="shop-cart.html" className="btn pink-color-black-gradient-btn ">CHECKOUT</a>-->
<!--                            </div>--> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- END SHOP CART TABLE -->

        <!-- START SHOP CART CHECKOUT FORM --> */}
        <div className="row pt-5">
            <div className="col-12 col-lg-6 wow slideInLeft" data-wow-duration="2s">
                <div className="calculate-shipping">
                    <h4 className="heading">Calculate Shipping</h4>
                    <form>
                        <div className="form-group">
                            <label className="select form-control">
                                <select name="country" id="states">
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Chile</option>
                                    <option>France</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="select form-control">
                                <select name="country" id="state">
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>Chile</option>
                                    <option>France</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Postal/Zip Code"/>
                        </div>
                        <a href="#" className="btn yellow-color-green-gradient-btn">Calculate</a>
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-6 wow slideInRight" data-wow-duration="2s">
                <div className="card-total">
                    <h4 className="heading">Card Total</h4>
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$251.00</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>
                                <ul className="color-grey">
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="flat-rate" name="shipping" className="custom-control-input" checked/>
                                            <label className="custom-control-label" v-for="flat-rate">Flat Rate : $49.00</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="free-shipping" name="shipping" className="custom-control-input"/>
                                            <label className="custom-control-label" v-for="free-shipping">Free Shipping</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="cod-shipping" name="shipping" className="custom-control-input"/>
                                            <label className="custom-control-label" v-for="cod-shipping">Cash on Delivery</label>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$300.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        {/* <!-- END SHOP CART CHECKOUT FORM --> */}

    </div>
</div>
{/* <!-- END SHOP CART SECTION--> */}

</div>
{/* <script src="..\vendor\js\bundle.min.js"></script> */}
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
<script src="/book-shop/js\script.js"></script>
    </>
  )
}

export default ShopCart
