import React from 'react';

import styles from './CartItem.module.scss';

const cartItem = props => {
    let item = props.items.length > 0 ? props.items.map((el, i) => {
        return (
            <div className="row p-2 mx-0 border" key={i}>
                <div className={`${styles.header} col-sm-6 d-flex justify-content-start align-items-center`}>
                    <button className={`${styles.delete} btn btn-light bg-white align-self-center`} title="remove">&times;</button>
                    <img src={el.recipe.image} alt={el.alt} className="img-fluid m-1 w-25"></img>
                    <h4 className={`${styles.title} ml-2`}>{el.recipe.label}</h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-around align-items-center">
                    <div>
                        <button className="btn btn-light btn-sm" title="less"> - </button>
                        <strong className="mx-2">1</strong>
                        <button className="btn btn-light btn-sm" title="more"> + </button>
                    </div>
                    <h2 className="text-primary ml-auto">${el.newPrice}</h2>
                </div>
            </div>
        )
    }) : <p className='text-center my-2'> Start adding items to your cart </p>;
    return (item);
};

export default cartItem;