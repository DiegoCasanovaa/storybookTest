import React from "react";
import './CardContent.css'

type CardProps ={
    textInfo: string,
    helpLink: string,
    buttonName:string
}

const CardContent = ({textInfo, helpLink, buttonName}:CardProps)=>{
    return(
        <>
            <div>
                {textInfo}
            </div>
            <div>
                                
                {buttonName}
            </div>
        </>

    );
}

export default CardContent;
