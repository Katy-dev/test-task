import styles from "./professionBanner.module.scss";
import React, { Component } from "react";
import Slider from "react-slick";
import { professionListMobile, professionListDesktop } from "./professionList";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: "block",
                background: "white",
                boxShadow: "-4px 4px 15px rgba(129, 103, 227, 0.2",
                borderRadius: "32px",
                padding: "20px",
                zIndex: "9",
                position:"absolute",
                top:"35%",
            }}
            onClick={onClick}
        >
            <img className={styles.arrow} src="/assets/image/icon/arrow-right.svg" alt="icon"/>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,
                display: "block",
                background: "white",
                boxShadow: "-4px 4px 15px rgba(129, 103, 227, 0.2",
                borderRadius: "32px",
                padding: "20px",
                zIndex: "9",
                position:"absolute",
                top:"35%",
            }}
            onClick={onClick}
        >
            <img className={styles.arrow}
                 src="/assets/image/icon/arrow-left.svg"
                 alt="icon"/>
            </div>
    );
}

export default class ProfessionBanner extends Component {

    render() {
        const settings = {
            dots:true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "86px",
            slidesToShow: 5,
            speed: 500,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            dotsClass: styles.button__bar,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
        ]
        };
        let list = window.innerWidth >= 420 ? professionListDesktop : professionListMobile;
        return (
            <div className={styles.profession_wrapper}>
                <h2>iCaria Living - Explore the wonders of life</h2>
                <span className={styles.spacing_before_slide}/>
                <ul className={styles.slider}>
                    <Slider  {...settings}>
                        {
                            list.map((item,index) => {
                             return(
                                 <li className={styles.slide} key={index}>
                                         <img src={item.img} alt="photo"/>
                                     <span className={styles.spacing}/>
                                     <h5>{item.title}</h5>
                                     <span className={styles.spacing}/>
                                 </li>
                             )
                            })
                        }
                    </Slider>
            </ul>
            </div>
        );
    }
}
