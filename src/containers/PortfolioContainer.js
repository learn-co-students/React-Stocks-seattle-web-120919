import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.ownedStocks.map(stock => {
      return <h3><Stock stock={stock} moveStock={this.props.moveStock}/></h3>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
