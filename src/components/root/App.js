import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from '../root/Dashboard'
import Navi from '../navi/Navi'
import { Route, Switch } from "react-router-dom"
import CartDetail from "../../components/cart/CartDetail"
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
   <div>
       <Navi/>
       <Switch>
           <Route path="/" exact component={Dashbord}/>
           <Route path="/product" exact component={Dashbord}/>
           <Route path="/cart" exact component={CartDetail}/>
           <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
           <Route path="/saveproduct" component={AddOrUpdateProduct}/>
           <Route component={NotFound}/>
           
       </Switch>
      
        </div>
  );
}

export default App;
