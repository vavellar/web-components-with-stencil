import { Component, EventEmitter, h, State, Event } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'victor-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement
  @State() searchResults: {symbol: string, name: string}[] = []
  @State() loading = false

  @Event({bubbles: true, composed: true}) csSymbolSelected: EventEmitter<string>

  onFindStocks(event: Event) {
    event.preventDefault()
    const stockName = this.stockNameInput.value
    this.loading = true
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(response => response.json())
      .then(parsedResponse => {
        this.searchResults = parsedResponse['bestMatches'].map(item => {
          return {
            symbol: item['1. symbol'],
            name: item['2. name']
          }
        })
      })
      .finally(() => this.loading = false)
  }

  onSelectSymbol(symbol: string) {
    this.csSymbolSelected.emit(symbol)
  }
  render() {
    if (this.loading) return <cs-spinner/>
    return (
      <div>
        <form onSubmit={this.onFindStocks.bind(this)}>
          <input
            id="stock-symbol"
            ref={el => this.stockNameInput = el}
          />
          <button type="submit">Find!</button>
        </form>
        <ul>
          {
            this.searchResults.map((item) => {
              return <li onClick={this.onSelectSymbol.bind(this, item.symbol)}><strong>{item.symbol}</strong>- {item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
