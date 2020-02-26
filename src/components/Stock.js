import React from 'react'
// receive as props: 
// stock={stock}
// id={stock.id}
// ticker={stock.ticker}
// name={stock.name}
// type={stock.type}
// price={stock.price}

const Stock = (props) => (
  <div>
    {/* make onClick event an arrowFn to prevent invoking addStock(),
    JSX will invoke methods with arguments*/}
    <div className="card" onClick={() => props.addStock(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">
          {props.name}
          </h5>
        <p className="card-text">
          {props.ticker}{' '}{props.price}
          </p>
      </div>
    </div>
  </div>
);

export default Stock
