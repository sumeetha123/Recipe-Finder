import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../css/body.css';
//import red from '@material-ui/core/colors/red';

class ItemModel extends Component {
  
    state = {  }

    changeColor = () => {
        let value = document.querySelector("#changeColor");
        value.classList.toggle("{{style = color:red}}")
    }
   
    render() { 
        return ( 
           
            <React.Fragment>
                <div className="contai">
                    <div className="namedish">{this.props.dishname}</div>
                     <div id="changeColor" onclick={this.changeColor}><FavoriteBorderIcon className="cpoint"></FavoriteBorderIcon></div> 
                    </div>
                   
                <div className="main">
                   <div> <img  src={this.props.image} className=" pic " alt="dish item"></img></div>
                    <div className="leftcon">
                    <div className="leftT">Category of Meal: {this.props.category}</div>
                    <div className="leftTw">Area of the Meal: {this.props.area}</div><br/>
                    <div className="Middle">Ingredients:</div>
                    <div className="MiddleTw">
                    <div>{this.props.ingredientName1}-----{this.props.measure1}</div><br />
                    <div> {this.props.ingredientName2}-----{this.props.measure2}</div><br />
                    <div> {this.props.ingredientName3}-----{this.props.measure3}</div><br />
                    <div> {this.props.ingredientName4}-----{this.props.measure4}</div><br />
                    <div> {this.props.ingredientName5}-----{this.props.measure5}</div><br />
                    <div> {this.props.ingredientName6}-----{this.props.measure6}</div><br />
                    <div> {this.props.ingredientName7}-----{this.props.measure7}</div><br />
                    <div> {this.props.ingredientName8}-----{this.props.measure8}</div><br />
                    <div> {this.props.ingredientName9}-----{this.props.measure9}</div>
                    </div>
                    <div className="Bottom">Recipes:<div className="BottomTw">{this.props.instructions}</div></div>
                    </div>
                </div>
            </React.Fragment>
    
         );
    }
}
 
export default ItemModel;
