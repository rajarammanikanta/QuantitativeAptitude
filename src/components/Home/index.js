import { Component } from "react"; 
import './index.css'
import Quantitative from "../Quantitative";
import Header from '../Header'

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <Header/>
              <Quantitative/>
            </div>
        )
    }
}

export default Home