import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {
    let portfolioList = this.props.portfolioStocks.map((stock)=> {
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
        <h2>My Portfolio</h2>
          {portfolioList}
      </div>
    );
  }

}

export default PortfolioContainer;
