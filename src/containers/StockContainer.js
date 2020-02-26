import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    let stocksList = this.props.containerStocks.map((stock)=> {
      return <Stock
        stock={stock}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        key={stock.id}
        addStock={this.props.addStock}
      />
  })

    return (
      <div>
        <h2>Stocks</h2>
        {stocksList}
      </div>
    );
  }

}

export default StockContainer;
