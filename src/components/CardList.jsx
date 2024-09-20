import React from 'react'
import styles from'./cardList.module.css'
import Card from './Card';

function CardList() {
    return (
        <div className={styles.cardList}>
            <Card
                title="Безлимитный 300"
                amount="300"
                condition="до 10 Мбит/сек"
                footer="Объем включенного трафика не ограничен"
                titleColor="Blue"
                contentColor="Blue"
                isHeightIncreased={true} // Увеличиваем высоту для первого Card
            />
            <Card
                title="Безлимитный 450"
                amount="450"
                condition="до 50 Мбит/сек"
                footer="Объем включенного трафика не ограничен"
                titleColor="Green"
                contentColor="Green"
            />
            <Card
                title="Безлимитный 550"
                amount="550"
                condition="до 100 Мбит/сек"
                footer="Объем включенного трафика не ограничен"
                titleColor="Red"
                contentColor="Red"
            />
            <Card
                title="Безлимитный 1000"
                amount="1000"
                condition="до 200 Мбит/сек"
                footer="Объем включенного трафика не ограничен"
                titleColor="Black"
                contentColor="Black"
            />
        </div>
    );
}

export default CardList;