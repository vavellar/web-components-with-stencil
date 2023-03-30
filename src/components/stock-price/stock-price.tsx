import { Component, h, State, Element, Prop, Watch, Listen } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
@Component({
  tag: 'victor-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement
  // initialStockSymbol: string
  @Element() el: HTMLElement
  @State() price: number
  @State() stockUserInput: string
  @State() stockInputValid = false
  @State() error: string
  @State() loading: boolean

  @Prop({ mutable: true, reflect: true}) stockSymbol: string
  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if(newValue !== oldValue) {
      this.stockUserInput = newValue
      this.stockInputValid = true
      this.fetchStockPrice(newValue)
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault()
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value
    this.stockSymbol = this.stockInput.value
    // this.fetchStockPrice(stockSymbol)
  }

  componentWillLoad() {
    console.log('componentWillLoad')
    console.log(this.stockSymbol)
  }

  componentDidLoad() {
    console.log('componentDidLoad')
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol
      // this.initialStockSymbol = this.stockSymbol
      this.stockInputValid = true
      this.fetchStockPrice(this.stockSymbol)
    }
  }
  @Listen('csSymbolSelected', { target: 'body'})
  onStockSymbolSelected(event: CustomEvent) {
    console.log('stock symbol selected' + event.detail)
    if(event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.fetchStockPrice(this.stockSymbol)
    //   this.initialStockSymbol = this.stockSymbol
    //   this.stockUserInput = this.stockSymbol
    // }
  }

  disconnectedCallback() {
    console.log('componentDidUnload')
  }

  fetchStockPrice(stockSymbol: string) {
    this.loading = true
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(parsedResponse => {
        if (!parsedResponse['Global Quote']['05. price']) {
          throw new Error('Invalid symbol!')
        }
        this.error = ''
        this.price = +parsedResponse['Global Quote']['05. price'];
      })
      .catch(err => {
        this.price = null
        this.error = err.message
      }).finally(() => this.loading = false)
  }

  // reserved method, is executed everytime render method is executed
  hostData() {
    return {class: this.error ? 'error': ''}
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value
    this.stockInputValid = this.stockUserInput.trim() !== ''
  }
  render() {
    if (this.loading) {
      return <cs-spinner/>
    }
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input
            id="stock-symbol"
            ref={el => this.stockInput = el}
            value={this.stockUserInput}
            onInput={this.onUserInput.bind(this)}
          />
          <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
        </form>
        <div>
          {this.error && <p>Invalid symbol</p>}
          {this.price && <p>Price: ${ this.price }</p>}
        </div>
      </div>
    )
  }
}
