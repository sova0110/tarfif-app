import React, { useState } from 'react';
import Card from './Card';
import styles from './cardList.module.css';

const data = [
    {
        "title": "Безлимитный 300",
        "amount": "300",
        "condition": "до 10 Мбит/сек",
        "footer": "Объем включенного трафика не ограничен",
        "titleColor": "Blue",
        "contentColor": "Blue"
    },
    {
        "title": "Безлимитный 450",
        "amount": "450",
        "condition": "до 50 Мбит/сек",
        "footer": "Объем включенного трафика не ограничен",
        "titleColor": "Green",
        "contentColor": "Green"
    },
    {
        "title": "Безлимитный 550",
        "amount": "550",
        "condition": "до 100 Мбит/сек",
        "footer": "Объем включенного трафика не ограничен",
        "titleColor": "Red",
        "contentColor": "Red"
    },
    {
        "title": "Безлимитный 1000",
        "amount": "1000",
        "condition": "до 200 Мбит/сек",
        "footer": "Объем включенного трафика не ограничен",
        "titleColor": "Black",
        "contentColor": "Black"
    },
];

function CardList() {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedCardIndex(index);
    };

    return (
        <div className={styles.cardList}>
            {data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    condition={item.condition}
                    footer={item.footer}
                    titleColor={item.titleColor}
                    contentColor={item.contentColor}
                    isHeightIncreased={index === 0}
                    isSelected={selectedCardIndex === index}
                    onSelect={() => handleSelect(index)}
                />
            ))}
        </div>
    );
}

export default CardList;