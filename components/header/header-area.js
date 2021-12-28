// import React from "react";
// export default function HeaderArea(){
//     return(
//         <div className="header-area">
//         <div className="container">
//             <div className="row upper-nav">
//                 <div className=" text-left nav-logo">
//                     <a href="index-book-shop.html" className="navbar-brand"><img src="book-shop\img\logo.png" alt="img"/></a>
//                 </div>
//                 <div className="ml-auto nav-mega d-flex justify-content-end align-items-center">
//                     <header className="site-header" id="header">
//                         <nav className="navbar navbar-expand-md  static-nav">
//                             <div className="container position-relative megamenu-custom">
//                                 <a className="navbar-brand center-brand" href="index-book-shop.html">
//                                     <img src="book-shop\img\logo.png" alt="logo" className="logo-scrolled"/>
//                                 </a>
//                                 <div className="collapse navbar-collapse">
//                                     <ul className="navbar-nav ml-auto">
//                                         <li className="nav-item">
//                                             <a className="nav-link" href="index-book-shop.html">HOME</a>
//                                         </li>
//                                         <li className="nav-item dropdown static">
//                                             <a className="nav-link dropdown-toggle active" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> BOOKS </a>
//                                             <ul className="dropdown-menu megamenu flexable-megamenu">
//                                                 <li>
//                                                     <div className="container">
//                                                         <div className="row">
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
//                                                                 <h5 className="dropdown-title"> Most Wanted </h5>
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Love Does</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">No One Belongs</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">As I Lay Dying</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Life is Elsewhere</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">The Road</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Why Me?</a></li>
//                                                                 </ul>
//                                                                 <h5 className="dropdown-title"> classNameic </h5>
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Lorna Doone</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Lord of Flies</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Kidnapped</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">End World</a></li>
//                                                                 </ul>
//                                                             </div>
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
//                                                                 <h5 className="dropdown-title"> NOVEL's </h5>
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Romance</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Fantasy</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Thrillers</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Science Fiction</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Historical Fiction</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Others</a></li>
//                                                                 </ul>
    
//                                                                 <h5 className="dropdown-title"> HISTORY </h5>
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Creative Thinking</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Historical Fiction</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Creative Thinking</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Personal Finance</a></li>
//                                                                 </ul>
    
//                                                             </div>
    
//                                                             <div className="col-lg-6 col-md-12 col-sm-12">
//                                                                 <h5 className="dropdown-title text-left">Featured Items </h5>
//                                                                 <div className="carousel-menu mt-4">
//                                                                     <div className="featured-megamenu-carousel owl-carousel owl-theme">
//                                                                         <div className="item ">
//                                                                             <img src="book-shop\img\shop1.jpg" alt="shop-image"/>
//                                                                         </div>
//                                                                         <div className="item">
//                                                                             <img src="book-shop\img\shop2.jpg" alt="shop-image"/>
//                                                                         </div>
//                                                                     </div>
//                                                                     <i className="lni-chevron-left ini-customPrevBtn"></i>
//                                                                     <i className="lni-chevron-right ini-customNextBtn"></i>
//                                                                 </div>
//                                                                 <p className="mt-4 megamenu-slider-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
//                                                                 <a href="book-shop\product-listing.html" className="btn black-border-color-yellow-gradient-btn slider-btn text-left">Buy Now</a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="nav-item dropdown static">
//                                             <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> E-BOOKS </a>
//                                             <ul className="dropdown-menu megamenu flexable-megamenu">
//                                                 <li>
//                                                     <div className="container">
//                                                         <div className="row">
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
//                                                                 <h5 className="dropdown-title bottom10"> Categories </h5>
    
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Art</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Autobiography</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Biography</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Chick lit</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Anthology</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Coming-of-age</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Drama</a></li>
    
//                                                                 </ul>
    
//                                                             </div>
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
//                                                                 <h5 className="dropdown-title opacity-10"> Others </h5>
//                                                                 <ul>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Crime</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i> <a className="dropdown-item" href="book-shop\product-listing.html">Dictionary</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i> <a className="dropdown-item" href="book-shop\product-listing.html">Health</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">History</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Journal
//                                                                     </a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Horror</a></li>
//                                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Poetry</a></li>
//                                                                 </ul>
    
//                                                             </div>
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
//                                                                 <h5 className="dropdown-title bottom10"> Author's </h5>
    
//                                                                 <div className="media outlet-media mt-3">
//                                                                     <div className="box">
//                                                                         <img className="align-self-start" src="book-shop\img\author1.jpg" alt="Generic placeholder image"/>
//                                                                     </div>
//                                                                     <div className="media-body">
//                                                                         <h6 className="mt-3 ml-3"><a href="#">Eva Smith</a></h6>
//                                                                     </div>
//                                                                 </div>
    
//                                                                 <div className="media outlet-media">
//                                                                     <div className="box">
//                                                                         <img className="align-self-start" src="book-shop\img\author2.jpg" alt="Generic placeholder image"/>
//                                                                     </div>
//                                                                     <div className="media-body">
//                                                                         <h6 className="mt-3 ml-3"><a href="#">Rosa Parks</a></h6>
//                                                                     </div>
//                                                                 </div>
    
//                                                                 <div className="media outlet-media">
//                                                                     <div className="box">
//                                                                         <img className="align-self-start" src="book-shop\img\author3.jpg" alt="Generic placeholder image"/>
//                                                                     </div>
//                                                                     <div className="media-body">
//                                                                         <h6 className="mt-3 ml-3"><a href="#">Alan Yang</a></h6>
//                                                                     </div>
//                                                                 </div>
    
    
//                                                                 <div className="media outlet-media">
//                                                                     <div className="box">
//                                                                         <img className="align-self-start" src="book-shop\img\author4.jpg" alt="Generic placeholder image"/>
//                                                                     </div>
//                                                                     <div className="media-body">
//                                                                         <h6 className="mt-3 ml-3"><a href="#">Kam John</a></h6>
//                                                                     </div>
//                                                                 </div>
    
//                                                             </div>
//                                                             <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
//                                                                 <a href="javascript:void(0);"><img src="book-shop\img\featured-product.jpg" alt="image"/></a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                             </ul>
//                                         </li>
//                                         <li className="nav-item dropdown position-relative">
//                                             <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAGES</a>
//                                             <div className="dropdown-menu">
//                                                 <ul>
//                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-listing.html">Listing One</a></li>
//                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop\product-detail.html">Detail Page</a></li>
//                                                     <li><i className="lni-angle-double-right right-arrow"></i><a className="dropdown-item" href="book-shop/shop-cart.html.html">ShopCart Page</a></li>
//                                                 </ul>
//                                             </div>
//                                         </li>
//                                         <li className="nav-item">
//                                             <a className="nav-link" href="book-shop\contact.html">CONTACT</a>
//                                         </li>
    
//                                     </ul>
//                                 </div>
//                             </div>
//                         </nav>
    
//                         {/* <!-- side menu --> */}
//                         <div className="side-menu opacity-0 gradient-bg hidden">
//                             <div className="inner-wrapper">
//                                 <span className="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
//                                 <nav className="side-nav w-100">
//                                     <ul className="navbar-nav">
    
//                                         <li className="nav-item">
//                                             <a className="nav-link" href="book-shop\product-listing.html"> HOME</a>
//                                         </li>
//                                         <li className="nav-item">
//                                             <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages1">
//                                                 BOOKS <i className="fas fa-chevron-down"></i>
//                                             </a>
//                                             <div id="sideNavPages1" className="collapse sideNavPages">
    
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Love Does</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">No One Belongs</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">As I Lay Dying</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Life is Elsewhere</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">The Road</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Why Me?</a></li>
//                                                 </ul>
//                                                 <h5 className="sub-title">1. classNameic</h5>
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Lorna Doone</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Lord of Flies</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Kidnapped</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">End World</a></li>
//                                                 </ul>
    
//                                                 <h5 className="sub-title">2. Novel's</h5>
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Romance</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Fantasy</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Thrillers</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Historical Fiction</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Others</a></li>
//                                                 </ul>
    
//                                                 <h5 className="sub-title">3. History</h5>
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Creative Thinking</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Historical Fiction</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Creative Thinking</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Personal Finance</a></li>
//                                                 </ul>
//                                             </div>
//                                         </li>
//                                         <li className="nav-item">
//                                             <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages3">
//                                                 E-BOOKS <i className="fas fa-chevron-down"></i>
//                                             </a>
//                                             <div id="sideNavPages3" className="collapse sideNavPages">
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Art</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Autobiography</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Biography</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Chick lit</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Coming-of-age</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Anthology</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Drama</a></li>
//                                                 </ul>
//                                                 <h5 className="sub-title">1. Others</h5>
//                                                 <ul className="navbar-nav mt-2">
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Crime</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html"> Dictionary</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html"> Health</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">History</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Horror</a></li>
//                                                     <li className="nav-item"><a className="nav-link" href="book-shop\product-listing.html">Poetry</a></li>
//                                                 </ul>
//                                             </div>
//                                         </li>
//                                         <li className="nav-item">
//                                             <a className="nav-link collapsePagesSideMenu" data-toggle="collapse" href="#sideNavPages2">
//                                                 PAGES <i className="fas fa-chevron-down"></i>
//                                             </a>
//                                             <div id="sideNavPages2" className="collapse sideNavPages">
//                                                 <ul className="navbar-nav">
//                                                     <li className="nav-item">
//                                                         <a className="nav-link" href="book-shop\product-listing.html">Listing One</a>
//                                                     </li>
//                                                     <li className="nav-item">
//                                                         <a className="nav-link" href="book-shop\product-detail.html">Detail Page</a>
//                                                     </li>
//                                                     <li className="nav-item">
//                                                         <a className="nav-link" href="book-shop\shop-cart.html">ShopCart Page</a>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </li>
//                                         <li className="nav-item">
//                                             <a className="nav-link" href="book-shop\contact.html">Contact</a>
//                                         </li>
//                                     </ul>
//                                 </nav>
//                                 <div className="side-footer w-100">
//                                     <ul className="social-icons-simple white top40">
//                                         <li><a className="facebook-bg-hvr" href="javascript:void(0)"><i className="fab fa-facebook-f"></i> </a> </li>
//                                         <li><a className="twitter-bg-hvr" href="javascript:void(0)"><i className="fab fa-twitter"></i> </a> </li>
//                                         <li><a className="instagram-bg-hvr" href="javascript:void(0)"><i className="fab fa-instagram"></i> </a> </li>
//                                     </ul>
//                                     <p className="whitecolor">&copy; <span id="year"></span> Product Shop. Made With Love by ThemesIndustry</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div id="close_side_menu" className="tooltip"></div>
//                         {/* <!-- End side menu --> */}
//                     </header>
//                     <div className="nav-utility">
//                         <div className="manage-icons d-inline-block">
//                             <ul className="d-flex justify-content-center align-items-center">
//                                 <li className="d-inline-block">
//                                     <a id="add_search_box">
//                                         <i className="lni lni-search search-sidebar-hover"></i>
//                                     </a>
//                                 </li>
//                                 <li className="d-inline-block mini-menu-card">
//                                     <a className="nav-link" id="add_cart_box" href="javascript:void(0)">
//                                         <i className="lni lni-shopping-basket"></i>
//                                     </a>
//                                 </li>
//                                 <a href="javascript:void(0)" className="d-inline-block sidemenu_btn d-block" id="sidemenu_toggle">
//                                     <i className="lni lni-menu"></i>
//                                 </a>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
    
//             </div>
//         </div>
//     </div>
//     )
// }