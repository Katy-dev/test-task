import React from "react";
import styles from "./button.module.scss";

const Button = () => {
    return (
        <div className={styles.button_wrapper}>
            <a
                href="#requestInfo"
            >
                Request Info
            </a>
        </div>
    )
}

export default Button;
