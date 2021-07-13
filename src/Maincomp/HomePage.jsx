import React, { Component } from 'react';
import Input from './BodyPage';
import '../css/header.css';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="heading">
                    <div className="headng">Recipe Finder</div>
                <Input/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;