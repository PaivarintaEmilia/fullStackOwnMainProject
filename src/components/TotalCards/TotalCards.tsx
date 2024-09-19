import React from "react";
import styles from "./TotalCards.module.css";


interface TotalCardsProps {
    totalCardTitle: string,
    totalCardAmount: number,
}

const TotalCards: React.FC<TotalCardsProps> = ({
    totalCardTitle,
    totalCardAmount,
}) => {

    /* TODO: totalAmountit tulee tietokannasta. Asetetaanko toiminnallisuus tänne vai homeScreeniin? Tehdään varmaan mappaus mutta missä?*/

    return (
            <div className={styles.singleCard}>
                <h2>{totalCardTitle}</h2>
                <p>{totalCardAmount}€</p>
            </div>

    );
}

export default TotalCards;