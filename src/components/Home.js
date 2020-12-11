import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Bacon_wrap from './../images/Bacon_wrap.jpg'
import Smoke_salmon from './../images/Smoke_salmon.jpg'
import Truffle_gnocchi from './../images/Truffle_gnocchi.jpg'


export default class Home extends Component {
    render() {
        return (

        <div> 
           <div className="container" id="section-1-gradient">
               
             <h1 className="justheading"><center>FoodInIt</center></h1> 
                   <div className ="row">
                        <div className="col-6">
                            <div className="leftside-col">
                                <h1 className="large">Easy Access</h1>
                                <h1 className="large">Made for Food lovers</h1>
                
                            </div>
                        </div>
                    </div>
             <div className="col-6">
             <div className="videoMargin">
             <div  className="videoContainer"> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rzNXJ9w_Zhs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
             </div>
             </div>
            </div>

          <div className = "container" id = "section-2-gradient">
             <h1>Choose foods that range all the way from Breakfast to Dinner!</h1>
                <center>
                 <img src = {Bacon_wrap}></img>
                 <img src = {Smoke_salmon}></img>
                 <img src = {Truffle_gnocchi}></img>
                </center>
          </div>
     </div>  
         );
    }
}
