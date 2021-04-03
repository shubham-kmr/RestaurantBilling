import classes from './food.module.css';
import React from 'react';
import Item from '../../Component/item'
class Food extends React.Component{
  state={items:this.props.currentValue["Chinese"]}
  tar="Chinese";
  changeItem=(e)=>{
    this.tar=e.target.value;
    this.setState({items:this.props.currentValue[this.tar]})
  }
  render(){
    return(
        <div className={classes.bevSelector}>
          <select defaultValue="Chinese" onChange={this.changeItem}>
            <option value="Chinese"> Chinese</option>
            <option value="Italian"> Italian</option>
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

export default Food;