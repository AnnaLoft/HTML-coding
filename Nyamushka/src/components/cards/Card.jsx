import React, {useState} from "react";

const Card = ({cardName, productName, productProps, amount, giftsAmount, gifts, size, addInfo, selectedText, soldOut, sel}) => {
    const [selected, setSelected] = useState(sel);
    let buyText;

    if (selected){
        buyText = <p className="link-txt">{selectedText}</p>;
    }
    else {
        buyText = <p className="link-txt">Чего сидишь? Порадуй котэ, <span className="buy-link" onClick={() => {setSelected(!selected)}}>купи</span></p>;
    }

    if (soldOut){
        buyText = <p className="disabled-notify">Печалька, {productProps} закончился.</p>;
    }
    return (
        <div className={`card-wrapper default ${selected ? 'active' : ''} ${soldOut ? 'disabled' : ''}`}>
            <div className="card-border" onClick={() => {setSelected(!selected)}}>
                <div className="card-body">
                    <div className="card__text-container">
                        <div className="product-description-wrapper">
                            <p className="card-name">{cardName}</p>
                            <p className="product-name">{productName}</p>
                            <p className="product-props">{productProps}</p>
                        </div>
                        <div className="product-amount-wrapper">
                            <p className="add-info amount"><span>{amount}</span> порций
                            </p>
                            <p className="add-info gifts"><span>{giftsAmount} </span>{gifts}</p>
                            <p className="add-info">{addInfo}</p>
                        </div>

                    </div>
                    <div className="card-pic"></div>
                    <div className="product-size">
                        <div className="producct-size__container">
                            <p className="size">{size}</p>
                            <p className="size-unit">кг</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__buy-link">
            
            {buyText}
            </div>
        </div>
    )
}

export default Card;