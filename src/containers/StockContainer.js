import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocksList.map(stock => {
      return <h3><Stock stock={stock} moveStock={this.props.moveStock}/></h3>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>

        {this.renderStocks()}

      </div>
    );
  }

}

export default StockContainer;
