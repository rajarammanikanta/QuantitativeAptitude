import { Component } from "react"; 
import './index.css'
import Quantitative from "../Quantitative";

class Home extends Component{
    render(){
        return(
            <div className="home-container">
              <Quantitative/>
            </div>
        )
    }
}

export default Home