import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocksList: [],
    ownedStocks: [],
    allStocks: []
  }

  componentDidMount(){
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({
        allStocks: data,
        stocksList: data
      })
    )
  }

  moveStock = (passedStock) => {
    if(!this.state.ownedStocks.includes(passedStock)){
      this.setState({
        ...this.state,
        ownedStocks: [
          ...this.state.ownedStocks,
          passedStock
        ]
      })
    } else {
      this.setState({
        ...this.state,
        ownedStocks: this.state.ownedStocks.filter(stock => {
          return stock.id !== passedStock.id
        })
      })
    }
  }

  sortByTicker = () => {
    this.setState({
      ...this.state,
      stocksList: this.state.stocksList.sort((a, b) => {
        let nA = a.ticker.toUpperCase()
        let nB = b.ticker.toUpperCase()
        if(nA < nB) {return -1}
        if(nA > nB) {return 1}
        return 0
      })
    })
  }

  sortByPrice = () => {
    this.setState({
      ...this.state,
      stocksList: this.state.stocksList.sort((a,b) => {
        return a.price - b.price
      })
    })
  }

  filterStocks = (type) => {
    this.setState({
      ...this.state,
      stocksList: this.state.allStocks.filter(stock => {
        return stock.type === type
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar sortByTicker={this.sortByTicker} sortByPrice={this.sortByPrice} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocksList={this.state.stocksList} moveStock={this.moveStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.state.ownedStocks} moveStock={this.moveStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
