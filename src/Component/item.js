import image from "../images/image.jfif";
import classes from './item.module.css'
const item=(props)=>{
  let dis=false;
  if(props.quan===0){
    dis=true;
  }
  
    return(
        <div className={classes.menuItems}>
          <div className={classes.itemCard}>
            <img src={image} alt="item" />
            <div>
              {props.name}
              <br />
              {props.price}
              <br />
              <br />
              <br />
              <button onClick={()=>props.delete(props.tar,props.name,props.price)} disabled={dis}>-</button>
              {props.quan}
              <button onClick={()=>props.add(props.tar,props.name,props.price)}>+</button>
            </div>
          </div>
</div>
    )
}
export default item;
          