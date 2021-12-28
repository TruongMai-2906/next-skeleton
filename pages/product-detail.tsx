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
const Productdetail: NextPage = () => {

  

  return (
    <>
    <section id="slider-sec" className="slider-sec parallax">
</section>
{/* <!--slider sec end-->

<!-- START HEADING SECTION --> */}
 <style jsx>{`
       #slider-sec{
        background:url('/book-shop/img/banner1.1.jpg');
        width:100%;
        height:100%;
       }
      `}</style>
<div className="about_content">
    <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="product-body">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-center text-lg-left">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Categories</a></li>
                            <li className="breadcrumb-item" aria-current="page"><a href="javascript:void(0)">Books</a></li>
                            <li className="breadcrumb-item"><a className="active" href="javascript:void(0)">The Road</a></li>
                        </ol>
                    </nav>
                    <div className="pro-detail-sec row">
                        <div className="col-12">
                            <h4 className="pro-heading text-center text-lg-left">Books  Collections</h4>
                            <p className="pro-text text-center text-lg-left">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                        </div>
                    </div>
                    <div className="row product-list product-detail">

                        <div className="col-12 col-lg-6 product-detail-slider">
                            <div className="wrapper">
                                <div className="Gallery swiper-container img-magnifier-container" id="gallery">
                                    <div className="swiper-wrapper myimgs">
                                        <div className="swiper-slide"> <a href="img\book-1-1.jpg" data-fancybox="1" title="Zoom In"><img className="myimage" src="/book-shop/img\book-1-1.jpg" alt="gallery"/></a></div>
                                        <div className="swiper-slide"> <a href="img\book-1.jpg" data-fancybox="2" title="Zoom In"><img className="myimage" src="/book-shop/img\book-1.jpg" alt="thumnails"/></a></div>
                                        <div className="swiper-slide"> <a href="img\book-1-2.jpg" data-fancybox="3" title="Zoom In"><img className="myimage" src="/book-shop/img\book-1-2.jpg" alt="thumnails"/></a></div>
                                    </div>
                                </div>
                                <div className="Thumbs swiper-container" id="thumbs">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"> <img src="/book-shop/img\book-1-1.jpg" alt="thumnails"/></div>
                                        <div className="swiper-slide"> <img src="/book-shop/img\book-1.jpg" alt="thumnails"/></div>
                                        <div className="swiper-slide"> <img src="/book-shop/img\book-1-2.jpg" alt="thumnails"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 text-center text-lg-left">
                            <div className="product-single-price">
                                <h4><span className="real-price">$249</span> <span><del>$450</del></span></h4>
                                <p className="pro-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                            </div>

                            <div className="product-checklist">
                                <ul>
                                    <li><i className="fas fa-check"></i> Satisfaction 100% Guaranteed</li>
                                    <li><i className="fas fa-check"></i> free shipping on orders over $99</li>
                                    <li><i className="fas fa-check"></i> 14 days easy Return</li>
                                </ul>
                            </div>

                            <div className="row product-quantity input_plus_mins no-gutters">

                                <div className="qty col-12 col-lg-3 d-lg-flex  align-items-lg-center d-inline-block">
                                    <span className="minus bg-dark"><i className="lni-minus"></i></span>
                                    <input type="number" className="count" name="qty" value="1"/>
                                    <span className="plus bg-dark"><i className="lni-plus"></i></span>
                                </div>
                                <div className="col-12 col-lg-9">
                                    <button className="btn green-color-yellow-gradient-btn">ADD TO CART</button>
                                </div>
                            </div>


                            <div className="dropdown-divider"></div>

                            <div className="product-tags-list">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><p className="d-inline">SKU: <span>00012</span></p></li>
                                        <li className="breadcrumb-item"><span className="d-inline">Categories: <a href="javascript:void(0)">classNameic</a><span className="comma-separtor">,</span><a href="javascript:void(0)">Fantasy</a></span></li>
                                        <li className="breadcrumb-item" aria-current="page"><p className="d-inline">Tags: <a href="javascript:void(0)">Fantasy</a><span className="comma-separtor">,</span><a href="javascript:void(0)">classNameic</a></p></li>
                                    </ol>
                                </nav>
                            </div>

                            <div className="share-product-details">
                                <ul className="share-product-icons">
                                    <li><p>Share Link:</p></li>
                                    <li><a href="javascript:void(0)" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li><a href="javascript:void(0)" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true"></i></a> </li>
                                    <li><a href="javascript:void(0)" className="linkedin-bg-hvr"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                                    <li><a href="javascript:void(0)" className="instagram-bg-hvr"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 mt-4 mb-4">
                            <div className="row no-gutters product-all-details">

                                <ul className="col-12 nav nav-tabs" id="myTab" role="tablist">
                                    <li className="col-4 nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Project Description</a>
                                    </li>
                                    <li className="col-4 nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Additional Information</a>
                                    </li>
                                    <li className="col-4 nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Customer Reviews  (2)</a>
                                    </li>
                                </ul>
                                <div className="col-12 tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <p className="product-tab-description text-center text-lg-left">If you are a small business and you are interested in small rebranding then this is a perfect plan for you, having Five years experience in Blogging, photographing, Disgning and love to cycling,Writting,Singing and Traveling around the world</p>
                                        <p className="product-tab-description text-center text-lg-left">If you are a small business and you are interested in small rebranding then this is a perfect plan for you, having Five years experience in Blogging, photographing, Disgning and love to cycling,Writting,Singing and Traveling around the world</p>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-12">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Alex</td>
                                                        <td>Thorn</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade reviews" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                        <div className="media">
                                            <div className="row no-gutter">
                                                <div className="col-12 col-lg-2 p-0">

                                                    <div className="row no-gutters">
                                                        <div className="col-12 d-flex  justify-content-center">
                                                            <img src="img\user.jpg" alt="Generic placeholder image"/>
                                                        </div>
                                                        <div className="col-12 d-flex mt-2 justify-content-center">
                                                            <ul className="user-rating">
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-12 col-lg-10 p-0">
                                                    <div className="media-body">
                                                        <span className="text-center text-lg-left d-block">27 Aug 2017</span>
                                                        <h5 className="mb-2 text-center text-lg-left">Media heading</h5>
                                                        <p className="text-center text-lg-left">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="row no-gutter">
                                                <div className="col-12 col-lg-2 p-0">

                                                    <div className="row no-gutters">
                                                        <div className="col-12 d-flex  justify-content-center">
                                                            <img src="/book-shop/img\user2.jpg" alt="Generic placeholder image"/>
                                                        </div>
                                                        <div className="col-12 d-flex mt-2 justify-content-center">
                                                            <ul className="user-rating">
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-12 col-lg-10 p-0">
                                                    <div className="media-body ">
                                                        <span className="text-center text-lg-left d-block">27 Aug 2017</span>
                                                        <h5 className="mb-2 text-center text-lg-left">Media heading</h5>
                                                        <p className="text-center text-lg-left">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row pl-2 pr-2">
                                            <div className="col-12 d-flex mb-4 mt-3">
                                                <h5 className="text-nowrap">Add Review</h5>
                                                <hr className="w-100 ml-5"/>
                                            </div>
                                            <div className="col-12">
                                                <form className="getin_form border-form" id="register">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group bottom35">
                                                                <input type="text" className="form-control" placeholder="Name*" required id="registerName"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="form-group bottom35">
                                                                <input type="email" className="form-control" placeholder="Email*" required id="registerEmail"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-2 text-center text-lg-left">
                                                            <h5 className="text-nowrap">Your Rating</h5>
                                                        </div>
                                                        <div className="col-12 col-lg-10 text-center text-lg-left">
                                                            <ul className="user-rating">
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star-filled"></i></a></li>
                                                                <li><a href="#"><i className="lni-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                {/* <!-<label for="comment">Your Rating:</label>--> */}
                                                                <textarea className="form-control textareaclassName" rows={5} id="comment" placeholder="Your Review"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 mt-3">
                                                            <div className="form-group d-flex justify-content-center d-lg-block">
                                                                <button className="text-center btn green-color-yellow-gradient-btn">Add Review</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    </div>

    {/* <!--START LATEST ARRIVALS--> */}
    <div className="lastest_arrivals">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <h1>Published Books</h1>
                </div>

                <div className="col-12">
                    <div className="lastest_featured_products owl-carousel owl-theme">

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l1.jpg" data-fancybox="lastest_product" data-title="Shirt Name">
                                        <img src="img\l1.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">Love In The Time</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text"> $750.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">  <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l7.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l7.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">The Joke</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $850.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l8.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l8.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">Never Let Me Go </h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $650.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l9.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l9.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title"> The Last World</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $680.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l10.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l10.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">Brave New World</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $250.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l11.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l11.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">Life Without Money</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $850.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l12.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l12.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">Life Is Elsewhere</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $950.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lastest_arrival_items item">
                            <a href="product-detail.html" className="lastest-addto-cart"><i className="fa fa-shopping-cart"></i></a>
                            <div className="card">
                                <span className="product-type">NEW</span>
                                <div className="image-holder">
                                    <a href="img\l7.jpg" data-fancybox="lastest_product" data-title="Lastest Arrivals 1">
                                        <img src="/book-shop/img\l13.jpg" className="card-img-top" alt="Lastest Arrivals 1"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h5 className="card-title">The Road</h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="card-text text-center"> $550.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--END LATEST ARRIVALS--> */}

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

export default Productdetail
