import React, { Component } from "react";
import classes from "./summary.module.css";
class Summary extends Component {
  render() {
    return (<div className={classes.summary}><h2>Check</h2>
    <table>
      <tbody>
      <tr>
        <th>Drinks</th>
        <th></th>
        <th>{this.props.drinksTotal}</th>
      </tr>
      {this.props.drinks.map((drinks,i)=>{
        if(drinks.quantity>0){
        return (
        <tr key={i}>
        <td>{drinks.name}</td>
        <td>{drinks.price+"X"+drinks.quantity}</td>
        <td>{drinks.price*drinks.quantity}</td>
      </tr>
        )}
        else{
          return null
        }
      })}<br/>
      <tr>
        <th>Food</th>
        <th></th>
        <th>{this.props.foodTotal}</th>
      </tr>
      {this.props.food.map((food,i)=>{
        if(food.quantity>0){
        return (
        <tr key={i}>
        <td>{food.name}</td>
        <td>{food.price+"X"+food.quantity}</td>
        <td>{food.price*food.quantity}</td>
      </tr>
        )}
        else{
          return null
        }
      })}<br/>
      <tr>
        <th>Dessert</th>
        <th>&emsp;&emsp;&emsp;&emsp;</th>
        <th>{this.props.dessertTotal}</th>
      </tr>
      {this.props.dessert.map((dessert,i)=>{
        if(dessert.quantity>0){
        return (
        <tr key={i}>
        <td>{dessert.name}</td>
        <td>{dessert.price+"X"+dessert.quantity}</td>
        <td>{dessert.price*dessert.quantity}</td>
      </tr>
        )}
        else{
          return null
        }
      })}<br/>
      <tr>
        <th>
          SubTotal
        </th>
        <td></td>
        <th>{this.props.totalPrice}</th>
      </tr>
      <tr>
        <td>
          Taxes
        </td>
        <td></td>
        <td>0</td>
      </tr>
      <tr>
        <td>
          Discount
        </td>
        <td></td>
        <td>0</td>
      </tr>
      </tbody>

      
      
    </table>
    <button>Pay { this.props.totalPrice}</button>
    </div>);
  }
}

export default Summary;
