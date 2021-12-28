import Document, { Html, Head, Main, NextScript } from 'next/document'
import Loader from '../components/loader/loader'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="author" content="Themes Industry"/>
    <meta name="description" content="Woman Store is a highly creative, modern, visually stunning and Bootstrap responsive multipurpose agency and HTML5 template with 14 ready home page demos."/>
    <meta name="keywords" content="creative, modern, clean, bootstrap responsive, h tml5, css3, portfolio, blog, agency, templates, multipurpose, one page, corporate, start-up, studio, branding, designer, freelancer, carousel, parallax, photography, personal, masonry, grid, faq"/>
    <title>Book Store | Home</title>
    <link rel="icon" href="book-shop/dummy-img/favicon.ico"/>
    <link rel="stylesheet" href="vendor\css\bundle.min.css"/>
    <link rel="stylesheet" href="vendor\css\jquery.fancybox.min.css"/>
    <link rel="stylesheet" href="vendor\css\owl.carousel.min.css"/>
    <link rel="stylesheet" href="vendor\css\swiper.min.css"/>
    <link rel="stylesheet" href="vendor\css\cubeportfolio.min.css"/>
    <link rel="stylesheet" href="vendor\css\wow.css"/>
    <link rel="stylesheet" href="vendor\css\LineIcons.min.css"/>
    <link rel="stylesheet" href="book-shop\css\nouislider.min.css"/>
    <link rel="stylesheet" href="book-shop\css\range-slider.css"/>
    <link rel="stylesheet" href="book-shop\css\settings.css"/>
    <link rel="stylesheet" href="book-shop\css\megamenu.css"/>
    <link rel="stylesheet" href="book-shop\css\style.css"/>
    <link rel="stylesheet" href="book-shop\css\custom.css"/>
    {/* tao ngua tao thich cho load vao dc ko , y kien ha con ca tre nay =)) */}
        </Head>
        <body>
          <Loader/>  
          <Main />
          <NextScript />
          {/* <!-- JavaScript --> */}
          <script src="vendor\js\bundle.min.js"></script>
          {/* <!-- Plugin Js --> */}
          <script src="vendor\js\jquery.fancybox.min.js"></script>
          <script src="vendor\js\owl.carousel.min.js"></script>
          <script src="vendor\js\swiper.min.js"></script>
          <script src="vendor\js\jquery.cubeportfolio.min.js"></script>
          <script src="vendor\js\wow.min.js"></script>
          <script src="vendor\js\bootstrap-input-spinner.js"></script>
          <script src="vendor\js\parallaxie.min.js"></script>
          <script src="vendor\js\stickyfill.min.js"></script>
          <script src="book-shop\js\nouislider.min.js"></script>

          <script src="vendor\js\jquery.themepunch.tools.min.js"></script>
          <script src="vendor\js\jquery.themepunch.revolution.min.js"></script>
          {/* <!-- SLIDER REVOLUTION EXTENSIONS --> */}
          <script src="vendor\js\extensions\revolution.extension.actions.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.carousel.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.kenburn.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.layeranimation.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.migration.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.navigation.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.parallax.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.slideanims.min.js"></script>
          <script src="vendor\js\extensions\revolution.extension.video.min.js"></script>

          {/* <!-- Custom Script --> */}
          <script src="book-shop\js\script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument