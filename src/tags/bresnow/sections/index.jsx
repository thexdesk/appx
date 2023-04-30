export const Preloader = () => {
  return (
    <div id="preloader" name="preloader">
      <div class="product_name">
        <Template name="title" />
      </div>
    </div>
  );
};
export const OffCanvasMenu = () => {
  return (
    <div name="offcanvas" class="offcanvas_menu">
      <ul class="navbar-nav side_menu">
        <li class="nav-item dropdown submenu active">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link" href="index.html">Home One</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="index-2.html">Home Two</a>
            </li>
            <li class="nav-item"><a class="nav-link" href="index-3.html">Home
              Three</a></li>
            <li class="nav-item active"><a class="nav-link" href="index-4.html">Home Four</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">
            Portfolio
          </a>
        </li>
        <li class="nav-item dropdown submenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Blogs
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="blog-details.html" class="nav-link">Blog Details</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">
            Contact
          </a>
        </li>
      </ul>
    </div>

  )
};
export const MainSlider = () => {
  return (
    <section class="main_slider_area_three">
      <div class="container">
        <div class="main_slider">
          <div class="slider_item">
            <div class="row">
              <div class="col-md-4 d-flex align-items-center">
                <div class="slider_content">
                  <h2 data-animation="fadeInUp" data-delay="0.2s">Creative Marketing & Interface
                    <span> Design</span>
                  </h2>
                  <a href="#" class="theme_btn btn_white" data-animation="fadeInUp"
                    data-delay="0.5s"></a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="slider_img_info">
                  <div class="slider_img" data-animation="fadeInRight" data-delay="0.2s">
                    <img src="img/home-three/01.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="slider_nav">
          <a href="#" class="prev"><i class="arrow_left"></i></a>
          <a href="#" class="next"><i class="arrow_right"></i></a>
        </div>
      </div>
    </section>)
};
export const Portfolio = () => {
  return (<section class="portfolio_area_three">
    <div class="container">
      <div class="row" id="portfolio_masonry">
        <div class="col-md-2 wow fadeInDown">
          <div class="sec_title">
            <h2>My <span>Work</span></h2>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.3s">
          <div class="portfolio_item_three">
            <div class="img"><img src="img/home-three/pr_1.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Brand Launching of Wom-<br />en's Sneakers</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.5s">
          <div class="portfolio_item_three pr">
            <div class="img"><img src="img/home-three/pr_2.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Natural and creative cover<br /> for Boots</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_3.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Marketing</div>
              <a href="#">
                <h3>Creative campaign for<br /> healthy food</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_4.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Marketing</div>
              <a href="#">
                <h3>Composition for minimal-<br /> ist brand</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_5.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Creation of total corporate<br /> identity</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="portfolio_item_three mt_190">
            <div class="img"><img src="img/home-three/pr_6.jpg" alt="" /></div>
            <div class="content">
              <div class="category">Branding</div>
              <a href="#">
                <h3>Grobal awareness<br /> stop campaign</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <a href="#" class="theme_btn">See all projects</a>
        </div>
      </div>
    </div>
  </section>)
};
export const Fact = () => {
  return (<section class="fact_area">
    <div class="container">
      <div class="sec_title text-center wow fadeInDown">
        <h2>Some Facts <span>& Figures</span></h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 wow fadeInDown">
          <div class="fact_item">
            <div class="counter">14</div><i class="arrow_up"></i>
            <p>Ongoing projects</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.2s">
          <div class="fact_item">
            <div class="counter">4.2</div>K<i class="arrow_up"></i>
            <p>Cups of coffee</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.4s">
          <div class="fact_item">
            <div class="counter">68</div><i class="arrow_up"></i>
            <p>Experts at work</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInDown" data-wow-delay="0.6s">
          <div class="fact_item">
            <div class="counter">3.7</div>K<i class="arrow_up"></i>
            <p>Happy customers</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
};
export const Contact = () => {
  return (<section class="contact_area black_bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 wow fadeInDown" data-wow-delay="0.2s">
          <div class="contact_info">
            <h2>920 N Church St. Wilmington, De 19801, USA.</h2>
            
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 wow fadeInDown" data-wow-delay="0.3s">
          <form action="#" class="row contact_form">
            <div class="col-lg-6 form-group">
              <input type="text" class="form-control" placeholder="Your email *" />
            </div>
            <div class="col-lg-6 form-group">
              <input type="text" class="form-control" placeholder="Phone *" />
            </div>
            <div class="col-lg-12 form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>I need to do marketing for my brand</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="col-md-6">
              <button type="submit" class="submit_btn">
                Send Message
              </button>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label" for="defaultCheck1">
                  I agree to receive information
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="border_bottom"></div>
    </div>
  </section>) }

  
export const Footer = () => {
  return (
  <footer class="black_bg">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.1s">
            <div class="f_widget about-widget">
              <a href="#" class="f_logo"><img src="img/bresnow_logo.png" width={50} alt="" /></a>
              <p>Our main objective is to help people achieve their business goals and make their
                business an efficient organization from all sides.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 wow fadeInDown" data-wow-delay="0.3s">
            <div class="f_widget social_widget">
              <h3 class="f_title">Follow Us On</h3>
              <ul class="list-unstyled">
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Linkedin</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 wow fadeInDown" data-wow-delay="0.5s">
            <div class="f_widget contact_widget">
              <h3 class="f_title">Contact Me</h3>
              <ul class="list-unstyled">
                  <li>Phone: 
                    <a href="tel:13024084628">+1 302 408 4628</a>
                </li>
                  <li>Email: <a href="mailto:bresnow@fltngmmth.com">bresnow@fltngmmth.com</a></li>
                <li>Address: 920 N Church St. Wilmington, De 19810</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-9">
            <p>©2023<a href="#">FloatingMammoth</a></p>
          </div>
          <div class="col-md-5 col-sm-3 text-right">
            <a href="#" class="go_top">go back up <i class="arrow_up"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>)};

export const Header = () => {
  return (
    <header class="header_area">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <a href="#" class="logo">
            <img  width={60} src="img/bresnow_logo.png" alt=""/>
            <img  width={60} src="img/bresnow__logo_b.png" alt=""/>
          </a>
          <div class="right_item">
            <a href="mailto:bresnow@fltngmmth.com" class="h_contact_info">bresnow@fltngmmth.com</a>
            <div class="burger_menu">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>)
}
export function Template({ name }) {
  return "%-- " + name + " --%";
}