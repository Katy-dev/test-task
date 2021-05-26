import React from "react";
import styles from "./requestInfoBanner.module.scss";
import FormRequest from "./form";

const RequestInfoBanner = () => {
    return (
        <section
            className={styles.request_wrapper}
            id={"requestInfo"}>
            <div className={styles.container}>
                <div className={styles.wrapper_context}>
                    <div className={styles.block_descr}>
                        <h4>Request info</h4>
                        <p>Got a question? Need to see a demo? Want to start your free trial subscription? We'd love to
                            hear from you! Contact us and we will get back to you shortly.</p>
                    </div>
                    <div className={styles.wrapper_img}><img src="/assets/image/img/contact.svg" alt="picture"/></div>
                </div>
                <div className={styles.wrapper_form}>
                    <FormRequest/>
                </div>
            </div>
        </section>
    )
}

export default RequestInfoBanner;
