import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.portfolio.map(stock => {
      return <Stock stock={stock} buyOrSell={this.props.buyOrSell} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.renderPortfolio()
        }
      </div>
    );
  }

}

export default PortfolioContainer;
