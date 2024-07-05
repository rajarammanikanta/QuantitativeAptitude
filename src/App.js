import 'bootstrap/dist/css/bootstrap.min.css';

import {Component} from 'react' 
import Home from './components/Home'
import Header from './components/Header';

class App extends Component{
  render(){
    return(
      <>
      <Header/>
      <Home/>
      </>
   

    )
  }
}

export default App;
