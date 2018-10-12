import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Nav from './Components/Nav'
import Currency from './Components/Currency'

class App extends Component {
  state={
    ronQuote: '',
    pokemonName: '',
    pokemonImg: '',
    pokemonNumber: 1,
    fox: ''
  }
  componentDidMount(){
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(res => {
      this.setState((prevProps)=>{
        return {ronQuote: res.data[0]}
      })
    })
  }

  getRonQuote = () => {
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(res => {
      this.setState((prevProps)=>{
        return {ronQuote: res.data[0]}
      })
    })
  }
  newPokemon = (number) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}/`).then(res => {
      console.log('Fn Sprite:', res.data.sprites.front_default )

      this.setState({
        pokemonName: res.data.name,
        pokemonImg: res.data.sprites.front_default,
        pokemonNumber: 1

      })
    })
  }
  getFox = () => {
    axios.get('https://randomfox.ca/floof/').then((res) =>{
      this.setState({
        fox: res.data.image
      })
    })
  }
  render() {
    console.log('sprites: ', this.state.pokemonImg)
    return (
      <div className="App">
        <Nav />
        <div className='quote'>
          <button onClick={this.getRonQuote}>Get Ron Quote</button>
          <p>{this.state.ronQuote}</p>
          <input type="text" placeholder='Enter number 1-151' onChange={e => this.setState({pokemonNumber: e.target.value})}/>
          <button onClick={() => this.newPokemon(this.state.pokemonNumber)}>Get Pokemon</button>
          <br/>
          <img src={this.state.pokemonImg} alt=""/>
          <h3>{this.state.pokemonName}</h3>
          <Currency currency={'EUR'} exchangeRate={.86}/>
          <Currency currency={'POUND'} exchangeRate={.76} />
          <Currency currency={'YEN'} exchangeRate={112.2} />
          
        </div>
      </div>
    );
  }
}

export default App;
