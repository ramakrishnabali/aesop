import { useState } from "react";
import Slider from "react-slick";
import { BiRightArrowAlt } from "react-icons/bi";
import Fashion from "./../assets/Home/Fashion.jpg"
import Moko from "./../assets/Home/MOKO.jpg"
import HkStotre from "./../assets/Home/HKStore.jpg"

const slideData = [1,2,3]

const StoreLocatorSlides = ()=>{
    const [currentSlide, setCurrentSlide] = useState(-1);
  const CustomPrevArrow = (props) => {
    return <div className="slick-prev" style={{marginLeft:"23px"}} onClick={props.onClick} />;
  };
  
  const CustomNextArrow = (props) => {
    return <div className="slick-next" style={{marginRight:"23px"}} onClick={props.onClick} />;
  };
    
      const settings = {
        dots: false,
        slidesToShow: 1,
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
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false
                }
              },
              {
                breakpoint: 1020,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false
                }
              }
        ]
      }
      const showPrevArrow = currentSlide > 1;
      const showNextArrow = currentSlide+1 < slideData.length - settings.slidesToShow;
    
      settings.prevArrow = showPrevArrow ? <CustomPrevArrow /> : '';
      settings.nextArrow = showNextArrow ? <CustomNextArrow /> : '';
      const indicators = Array.from({ length: slideData.length+1-settings.slidesToShow }, (_, index) => (
        <div
          key={index}
          className={`indicator-line ${index === currentSlide ? 'active' : ''}`}
        ></div>
      ))
    return(
    <div className="store-locator-container">
          <div className="warp-up-sub-container">
            <p className="warp-up">The Athenaeum</p>
            <h1 className="wrap-up-heading">The warm-up </h1>
            <p className="warp-up-para">In The Athenaeum, our digital reading room:<br/>
            a guide to ensuring a healthy complexion through<br/>
            the warmer months.</p>
            <button type="button" className='warp-up-button'>Read more <BiRightArrowAlt /></button>
          </div>

          <div className="store-locator-slides">
          <div className="slider-container">
            <Slider {...settings}>
                  {/* <div  className="brand-image">
                    <div className='home-top-sub-container' style={{marginBottom:"100px"}}>
                      <p className='bar-soaps-para' style={{color:"black"}}>Bar Soaps</p>
                      <h1  className='home-heading' style={{color:"black"}}> A body care calssic, reimagined</h1>
                      <p className='bar-soaps-para' style={{color:"black"}}>Breathing new life into the humble bar soap are Nurture,<br/>
                        Polish and Refresh—three additions to the range, each imparting<br/>
                          a unique constellation of benefits.</p>
                      <button type="button" className='discover-button' style={{color:"black",border:"none",padding:"0px",justifyContent:"flex-start"}}>Discover Bar Soaps <BiRightArrowAlt /></button>
                    </div>
                  </div>  */}

                   <div  className="brand-image">
                      <img src={Fashion} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"0px", width:"100%",marginBottom:"0px",height:"100%"}} />
                      {/* <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p> */}
                  </div>

                  <div  className="brand-image">
                    <img src={Moko} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"0px", width:"100%",marginBottom:"0px",height:"100%"}}/>
                    {/* <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p> */}
                  </div>

                  <div  className="brand-image">
                    <img src={HkStotre} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"0px", width:"100%",marginBottom:"0px",height:"100%"}}/>
                    {/* <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p> */}
                  </div>

                  {/* <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand'  style={{marginTop:"117px"}}/>
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
                  </div>

                  <div  className="brand-image">
                    <img src={BodyNuture} alt="CELEBRE125x125" className='image-brand' />
                    <h1 className="nature-bar-soaps-heading">Nature Bar Soaps</h1>
                      <p className="nature-bar-sopas-desc">Offers a mild yet effective cleanse</p>
                  </div> */}
             
            </Slider>
          </div>
        <div className="indicator-container">
            <>
            {indicators}
            {/* <p>hello</p> */}
            </>
           
        </div>
      </div>
      </div>
)
}
export default StoreLocatorSlides