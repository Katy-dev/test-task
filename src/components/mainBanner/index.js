import React from "react";
import classes from "./mainBanner.module.scss";
import Button from "../common/button/button";


const MainBanner = () => {
    const desktopImage = "/assets/image/img/photoMainBanner.png";
    const mobileImage = "/assets/image/img/mobile-woman.png";

    const imageUrl = window.innerWidth >= 420 ? desktopImage : mobileImage;

    const styles = {
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
    };

    return (
        <section style={styles}
                 className={classes.wrapper}
        >
            <div className={classes.wrapper_content}>
            <div className={classes.content}>
                <h3 className={classes.title}>Become a five-star professional!</h3>
                <p>Join the growing community of professional icarians.   Use the iCaria professional services to launch and grow your business, manage your clients, organize your schedule, and simplify your payments. With iCaria certification, your customers will be assured safe and secure access to services.</p>
                <Button button="mainBanner"/>
            </div>
            </div>
        </section>
    )
}

export default MainBanner;
