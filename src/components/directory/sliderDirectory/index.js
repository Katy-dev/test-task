import React, {Component} from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";
import {listDirectory} from "../list";

export default class SliderDirectory extends Component {

    render() {
        const settings = {
            infinite: true,
            slidesToScroll: 1,
            dots: true,
            centerPadding: "86px",
            slidesToShow: 1,
            autoplay: true,
            speed: 500,
            dotsClass: styles.button__bar,
            responsive: [

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
        return (
            <div className={styles.wrapper}>
                <Slider {...settings}>
                    {
                        listDirectory.map((item, index) => {
                            return (
                                <li className={styles.slide} key={index}>
                                    <img src={item.icon} alt="icon"/>
                                    <span className={styles.first_line}/>
                                    <span className={styles.second_line}/>
                                    <h5>{item.title}</h5>
                                    <span className={styles.third_line}/>
                                    <p>{item.description}</p>
                                </li>
                            )
                        })
                    }

                </Slider>
            </div>
        )
    }
}
