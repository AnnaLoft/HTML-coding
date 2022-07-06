import React from "react";
import Card from "../cards/Card";


const Container = ({cards}) => {
    const cardList = cards.map((el, idx) => <Card
        key={idx}
        cardName={el.cardName}
        productName={el.productName}
        productProps={el.productProps}
        amount={el.amount}
        giftsAmount={el.giftsAmount}
        gifts={el.gifts}
        addInfo={el.addInfo}
        size={el.size}
        selectedText={el.selectedText}
        soldOut={el.soldOut}
        sel={el.selected} />);

    return (
        <article className="cards-container">
            {cardList}
        </article>
    )

}

export default Container;