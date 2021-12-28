import React from "react";
export default function PortfolioSection(){
    return(
        <div className="portfolio-section">
    <div className="container">
        <div className="row">

            {/* <!-- START PORTFOLIO HEADING --> */}
            <div className="col-12">
                <div className="portfolioHeading text-center">
                    <h1 className="high-lighted-heading">Our Popular Product</h1>
                    <p>Aenean imperdiet. Etiam ultricies nisi vel augue men tuhi spectrum alle me.</p>
                </div>
            </div>
            {/* <!-- END PORTFOLIO HEADING --> */}

            {/* <!-- START FILTERS --> */}
            <div className="col-12">
                <div className="clearfix d-flex justify-content-center">
                    <div id="js-filters-blog-posts" className="cbp-l-filters-button cbp-1-filters-alignCenter">
                        <div data-filter="*" className="cbp-filter-item-active cbp-filter-item">All </div>
                        <div data-filter=".classNameic" className="cbp-filter-item">classNameics</div>
                        <div data-filter=".Fantasy" className="cbp-filter-item">Fantasy</div>
                        <div data-filter=".motion" className="cbp-filter-item">Historical Fiction</div>
                    </div>
                </div>
            </div>
            {/* <!-- END FILTERS --> */}

            {/* <!-- START PORTFOLIO IMAGES --> */}
            <div className="col-12">
                <div id="js-grid-blog-posts" className="cbp">

                    <div className="cbp-item classNameic Fantasy">
                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-1.jpg" className="cbp-caption" data-fancybox="gallery1" data-title="Book 1"><img src="book-shop\img\book-1.jpg" alt="Book 1"/></a></div>
                            <div className="item"> <a href="book-shop\img\book-1-1.jpg" className="cbp-caption" data-fancybox="gallery1" data-title="Book 1"><img src="book-shop\img\book-1-1.jpg" alt="Book 1"/></a></div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">So Sad Today</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$750.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="cbp-item classNameic Fantasy">
                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-2.jpg" className="cbp-caption" data-fancybox="gallery2" data-title="Book2"> <img src="book-shop\img\book-2.jpg" alt=""/></a></div>
                            <div className="item"> <a href="book-shop\img\book-2-1.jpg" className="cbp-caption" data-fancybox="gallery2" data-title="Book2"><img src="book-shop\img\book-2-1.jpg" alt=""/></a></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                               <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">The Last Stand</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$550.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="cbp-item classNameic">
                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-3.jpg" className="cbp-caption" data-fancybox="gallery3" data-title="Shirt Name"> <img src="book-shop\img\book-3.jpg" alt=""/></a></div>
                            <div className="item"> <a href="book-shop\img\book-3-1.jpg" className="cbp-caption" data-fancybox="gallery3" data-title="Shirt Name"><img src="book-shop\img\book-3-1.jpg" alt=""/></a></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">Love Does</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$450.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="cbp-item Fantasy motion">

                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>

                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-4.jpg" className="cbp-caption" data-fancybox="gallery4" data-title="Shirt Name"> <img src="book-shop\img\book-4.jpg" alt=""/></a></div>
                            <div className="item"> <a href="book-shop\img\book-4-1.jpg" className="cbp-caption" data-fancybox="gallery4" data-title="Shirt Name"><img src="book-shop\img\book-4-1.jpg" alt=""/></a></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">The Imortal Rules</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$750.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="cbp-item Fantasy motion">
                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>

                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-5.jpg" className="cbp-caption" data-fancybox="gallery5" data-title="Shirt Name"> <img src="book-shop\img\book-5.jpg" alt=""/></a></div>
                            <div className="item"> <a href="book-shop\img\book-5-1.jpg" className="cbp-caption" data-fancybox="gallery5" data-title="Shirt Name"><img src="book-shop\img\book-5-1.jpg" alt=""/></a></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">As I Lay Dying</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$450.00</div>
                            </div>
                        </div>

                    </div>

                    <div className="cbp-item Fantasy motion">
                        <a className="portfolio-circle-cart" href="book-shop\shop-cart.html">
                            <i className="fa fa-shopping-cart"></i>
                        </a>

                        <div className="cbp-caption-defaultWrap  owl-theme sync-portfolio-carousel owl-carousel">
                            <div className="item"> <a href="book-shop\img\book-6.jpg" className="cbp-caption" data-fancybox="gallery6" data-title="Shirt Name"> <img src="book-shop\img\book-6.jpg" alt=""/></a></div>
                            <div className="item"> <a href="book-shop\img\book-6-1.jpg" className="cbp-caption" data-fancybox="gallery6" data-title="Shirt Name"><img src="book-shop\img\book-6-1.jpg" alt=""/></a></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-title"><a href="#" target="_blank" className="portfolio-title">No One Belongs</a></div>
                            </div>
                            <div className="col-12 text-center">
                                <div className="cbp-l-grid-blog-desc portfolio-des">$999.00</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* <!-- END PORTFOLIO IMAGES --> */}

        </div>
    </div>
</div>
    )
}