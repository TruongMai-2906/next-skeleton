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
const Contact: NextPage = () => {

  

  return (
    <>
    <div className="map-load">
    <div id="map"></div>
</div>
{/* <!--Slider End-->

<!-- Contact Us Start --> */}
<section className="contact-sec" id="contact-sec">

    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 contact-description wow slideInLeft" data-wow-delay=".8s">
                <div className="contact-detail wow fadeInLeft">
                    <div className="ex-detail">
                        <span className="fly-text">CONTACT US</span>
                        <h4 className="large-heading">
                            <span className="heading-1">Get</span>
                            <span className="heading-2">In Touch</span>
                        </h4>
                    </div>
                    <p className="small-text text-center text-md-left">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.
                    </p>
                    <div className="row location-details text-center text-md-left">
                        <div className="col-12 col-md-6 country-1">
                            <h4 className="heading-text text-left">United States</h4>
                            <ul>
                                <li><i className="fas fa-mobile-alt"></i><a href="#">+(34) 609 33 17 54</a></li>
                                <li><i className="fas fa-envelope"></i><a href="#">email@website.com</a></li>
                                <li><i className="fas fa-map-marker"></i><a href="#">201 Oak Street 27 Manchester, USA</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 couuntry-1">
                            <h4 className="heading-text text-left">Australia</h4>
                            <ul>
                                <li><i className="fas fa-mobile-alt"></i><a href="#">+(34) 609 33 17 54</a></li>
                                <li><i className="fas fa-envelope"></i><a href="#">email@website.com</a></li>
                                <li><i className="fas fa-map-marker"></i><a href="#">201 Oak Street 27 Manchester, USA</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 contact-box text-center text-md-left wow slideInRight" data-wow-delay=".8s">
                <div className="c-box wow fadeInRight">
                    <h4 className="small-heading">Leave Message</h4>
{/* <!--                        <p className="small-text">Lorem ipsum is simply dummy text of the printing and typesetting industry. </p>--> */}
                    <form className="contact-form" id="contact-form-data">
                        <div className="row my-form">
                            <div className="col-md-12 col-sm-12">
                                <div id="result"></div>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control" id="candidate_fname" name="firstName" placeholder="First Name" required/>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control" id="candidate_lname" name="lastName" placeholder="Last Name" required/>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="email" className="form-control" id="user_email" name="userEmail" placeholder="Email" required/>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control" id="user_subject" name="userSubject" placeholder="Subject" required/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" id="user_message" name="userMessage" placeholder="Message" rows={7} required/>
                            </div>
                            <div className="col-12">
                                <button className="btn green-color-yellow-gradient-btn user-contact contact_btn" type="button">SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="/vendor\js\bundle.min.js"></script>
{/* <!-- Plugin Js --> */}
<script src="/vendor\js\jquery.fancybox.min.js"></script>
<script src="/vendor\js\owl.carousel.min.js"></script>
<script src="/vendor\js\swiper.min.js"></script>
<script src="/vendor\js\jquery.cubeportfolio.min.js"></script>
<script src="/vendor\js\wow.min.js"></script>
<script src="/vendor\js\bootstrap-input-spinner.js"></script>
<script src="/vendor\js\parallaxie.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhrdEzlfpnsnfq4MgU1e1CCsrvVx2d59s"></script>
<script src="/book-shop/js\map.js"></script>
{/* <!--contact form--> */}
<script src="/vendor\js\contact_us.js"></script>
{/* <!-- Custom Script --> */}
<script src="/book-shop/js\script.js"></script>
    </>
  )
}

export default Contact
