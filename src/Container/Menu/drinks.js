import classes from './drinks.module.css';
import React from 'react';
import Item from '../../Component/item'
class Drinks extends React.Component{
  state={items:this.props.currentValue["Wine"]}
  tar="Wine";
  changeItem=(e)=>{
    this.tar=e.target.value;
    this.setState({items:this.props.currentValue[this.tar]})
  }

  render(){
    return(
        <div className={classes.bevSelector}>
          <select defaultValue="Wine" onChange={this.changeItem}>
            <option value="Wine"> Wine</option>
            <option value="Beer"> Beer</option>
            <option value="Mocktail"> Mocktail</option>
          </select>
          {this.state.items.map((items,index)=>{
            return(
              <Item key={index} name={items.name} price={items.price} add={this.props.add} delete={this.props.delete} quan={items.quantity} tar={this.tar}/>
            )
          })}
        </div>
    )
  }
}

export default Drinks;