import React from 'react'
import styles from './card.module.css'

function Card(props) {
    const titleClass = `${styles.cardTitle} ${styles[`cardTitle${props.titleColor}`]}`;
    const contentClass = `${styles.contentCard} ${styles[`contentCard${props.contentColor}`]}`;
    const conditionClass = styles.cardCondition;
    const footerClass = styles.cardFooter;

    return (
        <div className={`${styles.body} ${props.isHeightIncreased ? styles.cardHeightIncreased : ''}`}>
            <div className={titleClass}>
                <h4 className={styles.h4Title}>{props.title}</h4>
            </div>
            <div className={contentClass}>
                <p>
                    <span style={{ fontSize: '15px' }}>руб </span>
                    <span style={{ fontSize: '40px' }}>{props.amount}</span>
                    <span style={{ fontSize: '16px' }}> /мес</span>
                </p>
            </div>
            <div className={conditionClass}>
                <p>{props.condition}</p>
            </div>
            <div className={footerClass}>
                <p>{props.footer}</p>
            </div>
        </div>
    );
}

export default Card;