import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'


class MainContainer extends Component {


  state = {
    all_stocks: [],
    stocks: [],
    sort: "",
    filter: "",
    bought: [],
  }

  /* get stocks */
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            stocks: result,
            all_stocks: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      )
  }

 

  setFilter = (new_filter) => {
    const new_stocks = this.state.all_stocks.filter(stck => stck.type === new_filter);

    this.setState({ 
      filter: new_filter,
      stocks: new_stocks
    })


  }

  buyStock = (stock) => {
    const new_stocks = this.state.stocks.filter(stck => stck.id !== stock.id);
    const new_stocks_all = this.state.all_stocks.filter(stck => stck.id !== stock.id);

    this.setState({
      stocks: new_stocks,
      all_stocks: new_stocks_all
    })
    if(!this.state.bought.includes(stock)) {
      this.setState({
        bought: [...this.state.bought, stock]
      })
    }
  }


  sellStock = (stock) => {
    const new_stocks = this.state.bought.filter(stck => stck.id !== stock.id);
    this.setState({
      bought: new_stocks,
      stocks: [...this.state.stocks, stock],
      all_stocks: [...this.state.all_stocks, stock]
    })
  }

  sortByAlpha = (e) => {
    console.log("alpha sort")
    let new_stocks = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
    this.setState({
      stocks: new_stocks
    })
  }

  sortByPrice = (e) => {
    console.log("price sort")
    let new_stocks = this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    this.setState({
      stocks: new_stocks
    })  }


  render() {
    return (
      <div>
        <SearchBar filter={this.setFilter} sortByAlpha={this.sortByAlpha} sortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.bought} buyStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
