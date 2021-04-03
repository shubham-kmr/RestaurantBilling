import Nav from "./Component/Nav/nav";
import Menu from "./Container/Menu/menu";
import {BrowserRouter} from 'react-router-dom'
// import "./App.css";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
    <div className={classes.app}>
      <Nav />
      <Menu />
    </div>
    </BrowserRouter>
  );
}

export default App;
