import React from "react";
import styles from "./DataCard.module.css";
import DataCardItemList from "./DataCardItemList";


interface DataCardProps {
    title: string;
    totalAmount: number;
}



const DataCard: React.FC<DataCardProps> = ({
    title,
    totalAmount,
}) => {



    return (
        <div className={styles.dataCardContainer}>
            <div className={styles.cardHeroContainer}>
                <h3>{title}</h3>
                <p>{totalAmount}€</p>
            </div>
            <DataCardItemList />

        </div>
    );
};

export default DataCard;