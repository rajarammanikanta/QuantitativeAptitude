import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'

import NumberSystem from './components/NumberSystem';
import HcfAndLcm from './components/HcfAndLcm';
import Percentage from './components/Percentage';
import Average from './components/Average';
import SimpleInterest from './components/SimpleInterest';
import Ages from './components/Ages';
import ProfitAndLoss from './components/ProfitAndLoss';


const App=()=>(
    
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path='/numbersystm' component={NumberSystem}/>
   <Route exact path="/hcflcm" component={HcfAndLcm}/>
   <Route exact path="/percentage" component={Percentage}/>
   <Route exact path="/average" component={Average}/>
   <Route exact path="/simpleintrest" component={SimpleInterest}/>
   <Route exact path="/ages" component={Ages}/>
   <Route exact path="/profitloss" component={ProfitAndLoss}/>
   
  </Switch>

 </BrowserRouter>

    
)

export default App;
