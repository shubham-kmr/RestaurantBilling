import React, { Component } from "react";
import classes from "./menu.module.css";
import data from '.././../items.json';
import {Link,Route} from 'react-router-dom';
import Drinks from './drinks'
import Food from './food'
import Dessert from './dessert'
import Summary from "../Summary/summary";


class Menu extends Component {
  state={drinks:data.items.drinks,food:data.items.food,dessert:data.items.dessert,drinksTotal:0,foodTotal:0,dessertTotal:0,totalPrice:0}
  drinks="";
  dessert="";
  food=""

  addDrinks=(tar,name,price)=>{
    let newDrinks=this.state.drinks
    let drinksTotal=this.state.drinksTotal
    let totalPrice=this.state.totalPrice
    let i=newDrinks[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newDrinks[tar][i].quantity=newDrinks[tar][i].quantity+1;
    this.setState({drinks:newDrinks,drinksTotal:drinksTotal+price,totalPrice:totalPrice+price})

  }
  delDrinks=(tar,name,price)=>{
    let newDrinks=this.state.drinks
    let totalPrice=this.state.totalPrice
    let drinksTotal=this.state.drinksTotal
    let i=newDrinks[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newDrinks[tar][i].quantity=newDrinks[tar][i].quantity-1;
    this.setState({drinks:newDrinks,drinksTotal:drinksTotal-price,totalPrice:totalPrice-price})


  }
  addFood=(tar,name,price)=>{
    let newFood=this.state.food
    let totalPrice=this.state.totalPrice
    let foodTotal=this.state.foodTotal
    let i=newFood[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newFood[tar][i].quantity=newFood[tar][i].quantity+1;
    this.setState({food:newFood,foodTotal:foodTotal+price,totalPrice:totalPrice+price})

  }
  delFood=(tar,name,price)=>{
    let newFood=this.state.food
    let foodTotal=this.state.foodTotal
    let totalPrice=this.state.totalPrice
    let i=newFood[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newFood[tar][i].quantity=newFood[tar][i].quantity-1;
    this.setState({food:newFood,foodTotal:foodTotal-price,totalPrice:totalPrice-price})


  }
  addDessert=(tar,name,price)=>{
    let newDessert=this.state.dessert
    let totalPrice=this.state.totalPrice
    let dessertTotal=this.state.dessertTotal
    let i=newDessert[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newDessert[tar][i].quantity=newDessert[tar][i].quantity+1;
    this.setState({dessert:newDessert,dessertTotal:dessertTotal+price,totalPrice:totalPrice+price})
  }
  delDessert=(tar,name,price)=>{
    let newDessert=this.state.dessert
    let totalPrice=this.state.totalPrice
    let dessertTotal=this.state.dessertTotal
    let i=newDessert[tar].findIndex((ele)=>{
      return ele.name===name
    })
    newDessert[tar][i].quantity=newDessert[tar][i].quantity-1;
    this.setState({dessert:newDessert,dessertTotal:dessertTotal-price,totalPrice:totalPrice-price})
  }
  render() {
    this.drinks=[...this.state.drinks.Wine,...this.state.drinks.Beer,...this.state.drinks.Mocktail]
    this.food=[...this.state.food.Chinese,...this.state.food.Italian]
    this.dessert=[...this.state.dessert.Cakes,...this.state.dessert.Cookies,...this.state.dessert.Pastries]
    return (<div className={classes.upperMenu}>
      <div className={classes.menu}>
        <h2>The Great Table</h2>
        <h4>Table: 5</h4>
        <div className={classes.tabs}>
          <Link to="drinks" className={classes.tabs1}>
            Drinks
          </Link>  
          <Link to="food" className={classes.tabs2}>
            Food
          </Link>   
          <Link to="Dessert" className={classes.tabs3}>
            Dessert
          </Link>   
        </div>
        <Route path="/drinks" render={()=><Drinks add={this.addDrinks} delete={this.delDrinks} currentValue={this.state.drinks}/>}/>
        <Route path="/food" render={()=><Food add={this.addFood} delete={this.delFood} currentValue={this.state.food}/>}/>
        <Route path="/dessert" render={()=><Dessert add={this.addDessert} delete={this.delDessert} currentValue={this.state.dessert}/>}/>
        </div>
        
        <Summary totalPrice={this.state.totalPrice} drinks={this.drinks} drinksTotal={this.state.drinksTotal} foodTotal={this.state.foodTotal} dessertTotal={this.state.dessertTotal} food={this.food} dessert={this.dessert}/>
      </div>
    );
  }
}

export default Menu;

