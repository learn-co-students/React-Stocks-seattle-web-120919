import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    containerStocks: [],
    portfolioStocks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(data => this.setState({
        allStocks: data,
        containerStocks: data
      })).catch(err=>console.log(err))
  }

// filter returns copy of array where fn(element) = true,
// !filter returns a copy of all else, set to state, render
  addStock = (stock) => {
    if(!this.state.portfolioStocks.includes(stock)){
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    } else {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks.filter(thisStock => {
          return thisStock.id !== stock.id
        })]
      })
    }
  }

  sortByTicker = () => {
    this.setState({
      containerStocks: this.state.containerStocks.sort((a, b) => {
        var x = a.ticker.toLowerCase();
        var y = b.ticker.toLowerCase();
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0;
      })
    })
  }

  sortByPrice = () => {
    this.setState({
      containerStocks: this.state.containerStocks.sort((a, b) => {
        return a.price - b.price})
    })
  }

  filterByType = (value) => {
    this.setState({
        containerStocks: this.state.allStocks.filter(stock => {
          return stock.type === value
        })
      })
  }

  render() {
    return (
      <div>
        <SearchBar
        sortByTicker={this.sortByTicker}
        sortByPrice={this.sortByPrice}
        filterByType={this.filterByType}/>
          <div className="row">
            <div className="col-8">
              <StockContainer 
              containerStocks={this.state.containerStocks}
              addStock={this.addStock}/>
            </div>
            <div className="col-4">
              <PortfolioContainer
              portfolioStocks={this.state.portfolioStocks}
              addStock={this.addStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
