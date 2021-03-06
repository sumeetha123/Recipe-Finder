import React, { Component } from 'react';
import ItemsSer from '../sources/items';
import ItemModel from './ItemsPage';
import '../css/search.css';

class Input extends Component {
    state = { 
        meals:[],
        inputValue:''
     }
     getDishes = async() =>{
            ItemsSer.getDish(this.state.inputValue).then(({data})=>{
                let {meals}=data;
                this.setState({meals});
        }).catch(()=>{
            let meals=null;
            this.setState({meals});
        }
        )

    };
    ChangeHandler = ({ target }) => {
        const inputValue = target.value;
        this.setState({ inputValue });
        
    };
    render() { 
        let {meals,inputValue}=this.state;
        return (
            <React.Fragment>
                <div className="cont">
                    <input onChange={this.ChangeHandler} type="text" placeholder="Enter the name of the dish" value={inputValue}className="search"/>
                    <button onClick={this.getDishes} className="but">Get Recipies</button>
                </div>
                {inputValue===""?

                <h2 className="line" id="h2-title">Type a Dish Name to Search for it's ingredients</h2>
                :
                meals===null?
                <h2 className="lines" id="h2-title">No Data Has been received</h2>
:
                
            meals.map((meal)=>{
                return <ItemModel
                key={meal.idMeal}
                dishname={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea}
                image={meal.strMealThumb}
                ingredientName1={meal.strIngredient1}
                ingredientName2={meal.strIngredient2}
                ingredientName3={meal.strIngredient3}
                ingredientName4={meal.strIngredient4}
                ingredientName5={meal.strIngredient5}
                ingredientName6={meal.strIngredient6}
                ingredientName7={meal.strIngredient7}
                ingredientName8={meal.strIngredient8}
                ingredientName9={meal.strIngredient9}
                measure1={meal.strMeasure1}
                measure2={meal.strMeasure2}
                measure3={meal.strMeasure3}
                measure4={meal.strMeasure4}
                measure5={meal.strMeasure5}
                measure6={meal.strMeasure6}
                measure7={meal.strMeasure7}
                measure8={meal.strMeasure8}
                measure9={meal.strMeasure9}
                instructions={meal.strInstructions}
                />
            })
        }   

            </React.Fragment>
          );
    }
}
 
export default Input;