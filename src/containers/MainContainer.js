import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    stocksToFilter: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(stocks => this.setState({
        stocks: stocks,
        stocksToFilter: stocks
      }))
      .catch(err => console.log(err))
  }

  // if buying, add to portfolio. if selling, remove from portfolio
  buyOrSell = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    } else {
      this.setState({
        portfolio: [...this.state.portfolio.filter(s => s.id !== stock.id)]
      })
    }
  }

  sortAlphabetically = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        } else {
          return 0
        }
      })
    })
  }

  sortByPrice = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        } else if (a.price > b.price) {
          return 1
        } else {
          return 0
        }
      })
    })
  }

  filterByType = (type) => {
    this.setState({
      stocks: this.state.stocksToFilter.filter(stock => stock.type === type)
    })
  }

  render() {
    return (
      <div>
        <SearchBar sortAlphabetically={this.sortAlphabetically} sortByPrice={this.sortByPrice} filterByType={this.filterByType} />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={this.state.stocks} buyOrSell={this.buyOrSell} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} buyOrSell={this.buyOrSell} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
