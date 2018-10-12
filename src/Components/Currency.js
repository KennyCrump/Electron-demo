import React, {Component} from 'react'

const withCurrency = (BaseComponent) =>
    class Currency extends Component{
        state={
            amount: 1
        }
        handleAmountIncrease = () => {
            this.setState((prevState, props) => {
              return {
                amount: prevState.amount + 1
              }
            })
          }
          handleAmountDecrease = () => {
            this.setState((prevState, props) => {
              return {
                amount: prevState.amount - 1
              }
            })
          }
        render(){
            return(
                <div>
                    <button onClick={this.handleAmountDecrease}>-</button>
                    <button onClick={this.handleAmountIncrease}>+</button>
                    <p>{this.state.amount}</p>
                    <BaseComponent 
                    amount={this.state.amount}
                    currency={this.props.currency}
                    exchangeRate={this.props.exchangeRate}/>
                </div>
            )
        }
    }

const CurrencyDisplay = (props) => (
    <p>
      US Dollar: ${props.amount.toFixed(2)} - {props.currency}{' '}
      {(props.amount * props.exchangeRate).toFixed(2)}
    </p>
  )
  
  const exchangedCurrency = withCurrency(CurrencyDisplay)
  
  export default exchangedCurrency
// import React, { Component } from 'react'

// const withCurrency = (Basecomponent) =>
//   class Curency extends Component {
//     state = {
//       amount: 1
//     }
//     handleAmountIncrease = () => {
//       this.setState((prevState, props) => {
//         return {
//           amount: prevState.amount + 1
//         }
//       })
//     }
//     handleAmountDecrease = () => {
//       this.setState((prevState, props) => {
//         return {
//           amount: prevState.amount - 1
//         }
//       })
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleAmountIncrease}>+</button>
//           <button onClick={this.handleAmountDecrease}>-</button>
//           <Basecomponent
//             amount={this.state.amount}
//             currency={this.props.currency}
//             exchangeRate={this.props.exchangeRate}
//           />
//         </div>
//       )
//     }
//   }

// const CurrencyDisplay = (props) => (
//   <p>
//     US Dollar: ${props.amount.toFixed(2)} - {props.currency}{' '}
//     {(props.amount * props.exchangeRate).toFixed(2)}
//   </p>
// )

// const exchangedCurrency = withCurrency(CurrencyDisplay)

// export default exchangedCurrency
