// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./components/Home"
import { useState } from "react";
import Slider from "react-slick";
import { BiRightArrowAlt } from "react-icons/bi";
import SkinCare from "./assets/Home/SkinCare.jpg"
import PostPooDrops from "./assets/Home/PostPooDrops.jpg"
import BodyNuture from "./assets/Home/BodyNurture.jpg"
import SkinLucentFacial from "./assets/Home/SkinLucentFacial.png"
import PurifyingFacialCream from "./assets/Home/PurifyingFacialCream.png"
import SeedAntiOxidant from "./assets/Home/SeedAntiOxidant.png"
import NutFacialHydrating from "./assets/Home/NutFacialHydrating.png"
import AromatiqueCandle from "./assets/Home/AromatiqueCandle.png"
import BrnozeIncense from "./assets/Home/BronzeIncense.png"
import MurasakiAromatique from "./assets/Home/MurasakiAromatique.png"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const slideData = [1,2,3,4,5]

const App=()=> {

  const [currentSlide, setCurrentSlide] = useState(0);
  const CustomPrevArrow = (props) => {
    return <div className="slick-prev" onClick={props.onClick} />;
  };
  
  const CustomNextArrow = (props) => {
    return <div className="slick-next" onClick={props.onClick} />;
  };
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          }
    ]
  }
  const showPrevArrow = currentSlide > 0;
  const showNextArrow = currentSlide < slideData.length - settings.slidesToShow;

  settings.prevArrow = showPrevArrow ? <CustomPrevArrow /> : '';
  settings.nextArrow = showNextArrow ? <CustomNextArrow /> : '';

  const indicators = Array.from({ length: slideData.length-settings.slidesToShow+1 }, (_, index) => (
    <div
      key={index}
      className={`indicator-line ${index === currentSlide ? 'active' : ''}`}
    ></div>
  ))
  return(
    <div className='home-container'>
      <div className='top-container'>
        <div className='home-top-container'>
          <h1 className='home-heading'>Aesop</h1>
          <div className='home-top-sub-container'>
            <p className='bar-soaps-para'>Bar Soaps</p>
            <h1  className='home-heading'> A body care calssic, reimagined</h1>
            <p className='bar-soaps-para'>Breathing new life into the humble bar soap are Nurture,<br/>
               Polish and Refresh—three additions to the range, each imparting<br/>
                a unique constellation of benefits.</p>
            <button type="button" className='discover-button'>Discover Bar Soaps <BiRightArrowAlt /></button>
          </div>
        </div>
      </div>

      <div className="home-top-sub-small-container">
      <div className='home-top-sub-container'>
            <p className='bar-soaps-para'>Bar Soaps</p>
            <h1  className='home-heading'> A body care calssic, reimagined</h1>
            <p className='bar-soaps-para'>Breathing new life into the humble bar soap are Nurture,<br/>
               Polish and Refresh—three additions to the range, each imparting<br/>
                a unique constellation of benefits.</p>
            <button type="button" className='discover-button'>Discover Bar Soaps <BiRightArrowAlt /></button>
          </div>
      </div>

      <div className="slides">
          <div className="slider-container">
            <Slider {...settings}>
                  <div  className="brand-image">
                    <div className='home-top-sub-container' style={{marginBottom:"100px"}}>
                      <p className='bar-soaps-para' style={{color:"black"}}>Bar Soaps</p>
                      <h1  className='home-heading' style={{color:"black"}}> A body care calssic, reimagined</h1>
                      <p className='bar-soaps-para' style={{color:"black"}}>Breathing new life into the humble bar soap are Nurture,<br/>
                        Polish and Refresh—three additions to the range, each imparting<br/>
                          a unique constellation of benefits.</p>
                      <button type="button" className='discover-button' style={{color:"black",border:"none",padding:"0px",justifyContent:"flex-start"}}>Discover Bar Soaps <BiRightArrowAlt /></button>
                    </div>
                  </div> 

                   <div  className="brand-image">
                      <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"117px"}} />
                      <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"117px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"117px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                   <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"117px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  {/* <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div> */}
             
            </Slider>
          </div>
        <div className="indicator-container">{indicators}</div>
      </div>

      <dvi className="warp-up-main-container">
        <div className="warp-up-sub-container">
          <p className="warp-up">The Athenaeum</p>
          <h1 className="wrap-up-heading">The warm-up </h1>
          <p className="warp-up-para">In The Athenaeum, our digital reading room:<br/>
          a guide to ensuring a healthy complexion through<br/>
          the warmer months.</p>
          <button type="button" className='warp-up-button'>Read more <BiRightArrowAlt /></button>

        </div>
        <img src={SkinCare} alt="skincare" className="warp-up-image" />
      </dvi>

      <div className="slides">
          <div className="slider-container">
            <Slider {...settings}>
                  <div  className="brand-image">
                    <div className='home-top-sub-container'>
                      <p className='bar-soaps-para' style={{color:"black"}}>Bar Soaps</p>
                      <h1  className='home-heading' style={{color:"black"}}> A body care calssic, reimagined</h1>
                      <p className='bar-soaps-para' style={{color:"black"}}>Breathing new life into the humble bar soap are Nurture,<br/>
                        Polish and Refresh—three additions to the range, each imparting<br/>
                          a unique constellation of benefits.</p>
                      <button type="button" className='discover-button' style={{color:"black",border:"none",padding:"0px",justifyContent:"flex-start"}}>Discover Bar Soaps <BiRightArrowAlt /></button>
                    </div>
                  </div> 

                   <div  className="brand-image">
                      <img src={SkinLucentFacial} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"100px"}}/>
                      <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={PurifyingFacialCream} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"100px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={SeedAntiOxidant} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"190px"}} />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                   <div  className="brand-image">
                    <img src={NutFacialHydrating} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"100px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  {/* <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div> */}
             
            </Slider>
          </div>
        <div className="indicator-container">{indicators}</div>
      </div>

      <dvi className="post-poo-main-container">
        <img src={PostPooDrops} alt="skincare" className="post-poo-image" />
          <div className="post-poo-sub-container">
            <p className="warp-up">Post-Poo Drops has returned</p>
            <h1 className="wrap-up-heading">The warm-up </h1>
            <p className="warp-up-para">Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.<br/>  
            </p>
            <button type="button" className='warp-up-button'>Read more <BiRightArrowAlt /></button>
          </div> 
      </dvi>

      <div className="slides">
          <div className="slider-container">
            <Slider {...settings}>
                  <div  className="brand-image">
                    <div className='home-top-sub-container'>
                      <p className='bar-soaps-para' style={{color:"black"}}>Bar Soaps</p>
                      <h1  className='home-heading' style={{color:"black"}}> A body care calssic, reimagined</h1>
                      <p className='bar-soaps-para' style={{color:"black"}}>Breathing new life into the humble bar soap are Nurture,<br/>
                        Polish and Refresh—three additions to the range, each imparting<br/>
                          a unique constellation of benefits.</p>
                      <button type="button" className='discover-button' style={{color:"black",border:"none",padding:"0px",justifyContent:"flex-start"}}>Discover Bar Soaps <BiRightArrowAlt /></button>
                    </div>
                  </div> 

                   <div  className="brand-image">
                      <img src={AromatiqueCandle} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"100px"}}/>
                      <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BrnozeIncense} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"125px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={MurasakiAromatique} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"100px"}}/>
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' style={{marginTop:"217px"}} />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  {/* <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div> */}
             
            </Slider>
          </div>
        <div className="indicator-container">{indicators}</div>
      </div>

      <div className="home-bottom-container">
        <h1 className="quotation">‘Life never becomes a habit to me. It's always a marvel.’</h1>
        <p className="quoted-by">Katherine Mansfield</p>
      </div>
    
  
      
    </div>
  )
}

export default App;
