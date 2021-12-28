import React from "react";
export default function SearchBoxOverlay(){
    return(
        <div className="search-box-overlay">
        <a><i className="fas fa-times cross-sign" id="close-window"></i></a>
    
        <div className="container">
            <div className="row">
                <div className="col-12 search-col">
                    <form action="javascript:void(0)">
                        <div className="input-group search-box-form">
                            <input type="text" className="form-control" placeholder="Search Here" aria-label="Search Here"/>
                            <div className="input-group-prepend">
                                <button className="input-group-text" type="submit" id="basic-addon1"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="search-listing row">
                    <div className="col-12 mb-4">
                        <h4 className="">Filtered Items</h4>
                    </div>
                    <div className="col-12">
                        <div className="listing-search-scroll">
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-1.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">So Sad Today</a></h5>
                                    <p className="category">Award Winning Book</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn" href="javascript:void(0)"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-2.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">As I Lay Dying</a></h5>
                                    <p className="category">Award Winning Book</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn" href="javascript:void(0)"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-3.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">Love Does</a></h5>
                                    <p className="category">Award Winning Book</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn" href="javascript:void(0)"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-2-1.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">The Last Stand</a></h5>
                                    <p className="category">Award Winning Book</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn" href="javascript:void(0)"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    
                </div>
    
                <div className="col-12">
                    <h4 className="outlet-title text-center"> - Author - </h4>
                </div>
    
                <div className="col-12">
                    <div className="search-box-meida-items owl-carousel owl-theme">
    
                        <div className="item">
                            <div className="brand-search-box ml-auto mr-auto">
                                <div className="media">
                                    <div className="brand-box-holder">
                                        <a href="javascript:void(0)"> <img className="mr-3" src="book-shop\img\author1.jpg" alt="Generic placeholder image"/></a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0"><a href="javascript:void(0)"> Eva Smith</a></h5>
                                        <p> Cras sit amet nibh libero.</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        <div className="item">
                            <div className="brand-search-box ml-auto mr-auto">
                                <div className="media">
                                    <div className="brand-box-holder">
                                        <a href="javascript:void(0)"> <img className="mr-3" src="book-shop\img\author2.jpg" alt="Generic placeholder image"/></a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0"><a href="javascript:void(0)">Rosa Parks</a></h5>
                                        <p> Cras sit amet nibh libero.</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        <div className="item">
                            <div className="brand-search-box ml-auto mr-auto">
                                <div className="media">
                                    <div className="brand-box-holder">
                                        <a href="javascript:void(0)"> <img className="mr-3" src="book-shop\img\author3.jpg" alt="Generic placeholder image"/></a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0"><a href="javascript:void(0)">Alan Yang</a></h5>
                                        <p> Cras sit amet nibh libero.</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        <div className="item">
                            <div className="brand-search-box ml-auto mr-auto">
                                <div className="media">
                                    <div className="brand-box-holder">
                                        <a href="javascript:void(0)"><img className="mr-3" src="book-shop\img\author4.jpg" alt="Generic placeholder image"/ ></a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0"><a href="javascript:void(0)">Kam John</a></h5>
                                        <p> Cras sit amet nibh libero.</p>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    )
}