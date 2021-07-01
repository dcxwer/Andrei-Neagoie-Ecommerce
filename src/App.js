import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop/shop.component";
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (

    <div className="">
    <BrowserRouter>      
    <Switch>
    
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>

      <Route path="*"><h1>404</h1></Route>

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App
