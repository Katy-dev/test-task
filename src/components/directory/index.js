import React from "react";
import styles from "./directoryBanner.module.scss";
import SliderDirectory from "./sliderDirectory";
import {listDirectory} from "./list";


const Directory = () => {

    const spaceBlock = (
        <div className={styles.space_block}>
            <span/>
            <span/>
        </div>
    );

    return (
        <section className={styles.wrapper}>
            {spaceBlock}
            <span/>
            <h5 className={styles.title}>why our directory</h5>
            <span/>
            <ul>
                <div className={styles.list_directory}>
                    {
                        (listDirectory.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.icon} alt="icon"/>
                                    <span className={styles.first_line}/>
                                    <span className={styles.second_line}/>
                                    <h5 className={styles.title_directory}>{item.title}</h5>
                                    <span className={styles.third_line}/>
                                    <p>{item.description}</p>
                                </li>
                            )
                        }))
                    }
                </div>
                <SliderDirectory/>
            </ul>
            {spaceBlock}
        </section>
    )
}

export default Directory;
