import React from 'react';
import './brand.css';
import logo from '../../../Assests/icons/white-hand.png';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
            <p className="brandnum">4</p>
            <p className="name">Bide</p>
            <div className="image-container">
            <img src={logo} alt="Compoany Logo"/>
            </div>
            <p className="lastTitle">Gastrobar</p>
        </div>

    );
}

export default brand;