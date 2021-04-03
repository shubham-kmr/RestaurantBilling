import classes from './dessert.module.css';
import React from 'react';
import Item from '../../Component/item'
class Dessert extends React.Component{
  state={items:this.props.currentValue["Cakes"]}
  tar="Cakes";
  changeItem=(e)=>{
    this.tar=e.target.value;
    this.setState({items:this.props.currentValue[this.tar]})
  }
  render(){
    return(
        <div className={classes.bevSelector}>
          <select defaultValue="Cakes" onChange={this.changeItem}>
            <option value="Cakes"> Cakes</option>
            <option value="Cookies"> Cookies</option>
            <option value="Pastries"> Pastries</option>
          </select>
          {this.state.items.map((items,index)=>{
            return(
              <Item name={items.name} price={items.price} add={this.props.add} delete={this.props.delete} quan={items.quantity} tar={this.tar} key={index}/>
            )
          })}
        </div>
    )
  }
}

export default Dessert;