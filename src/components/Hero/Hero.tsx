import React from "react";
import styles from "./Hero.module.css";


interface HeroProps {
    heroTitle: string,
    titleTag: string,
}

const Hero: React.FC<HeroProps> = ({
    heroTitle,
    titleTag
}) => {

    return (
        <div className={styles.HeroContainer}>
            <div className={styles.textContainer}>
                <h1>{heroTitle}</h1>
                <h2>{titleTag}</h2>
            </div>
        </div>
    );
}

export default Hero;