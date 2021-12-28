import React from "react";
export default function CartBoxOverlay(){
    return(
        <div className="cart-box-overlay">
        <a><i className="fas fa-times cross-sign" id="close-window1"></i></a>
    
        <div className="container">
            <div className="row">
                <div className="search-listing row">
                    <div className="col-12 mb-4">
                        <h4 className="">Shop Cart</h4>
                    </div>
                    <div className="col-12">
                        <div className="listing-search-scroll">
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-1.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">So Sad Today</a></h5>
                                    <p className="category">light wear Lastest</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                            <div className="media row">
                                <div className="img-holder ml-1 mr-2 col-4">
                                    <a href="javascript:void(0)"><img src="book-shop\img\book-2.jpg" className="align-self-center" alt="cartitem"/></a>
                                </div>
                                <div className="media-body mt-auto mb-auto col-8">
                                    <h5 className="name"><a href="javascript:void(0)">As I Lay Dying</a></h5>
                                    <p className="category">light wear Lastest</p>
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
                                    <p className="category">light wear Lastest</p>
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
                                    <p className="category">light wear Lastest</p>
                                    <a className="btn black-sm-btn" href="book-shop\shop-cart.html"><i className="fas fa-shopping-bag"></i></a>
                                    <a className="btn black-sm-btn" href="javascript:void(0)"><i className="fas fa-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bag-btn">
                <h4 className="total"><span>Total: </span>100$</h4>
                <a href="javascript:void(0)" className="btn green-color-yellow-gradient-btn">View Bag </a>
                <a href="javascript:void(0)" className="btn yellow-color-green-gradient-btn">Checkout </a>
            </div>
    
        </div>
    
    </div>
    )
}