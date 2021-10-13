import React from "react";
import CardContent from "./cardContent/CardContent";
import './CardCreateActions.css';

type CardProps ={
    cardName: string,
    textInfo: string,
    helpLink: string,
    buttonName:string
}
const CardCreateActions = ({cardName,textInfo, helpLink, buttonName }:CardProps) =>{
    return(     
        <div className="card-container">
           <p className="">{cardName}</p>
            <CardContent textInfo={ textInfo } helpLink={ helpLink} buttonName={ buttonName } /> 
        </div>
    );
}

export default CardCreateActions;