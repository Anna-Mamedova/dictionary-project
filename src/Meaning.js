import React from "react";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {/* <p>
                {props.meaning.definitions[0].definition}
            </p>
            <p>
                <em>{props.meaning.definitions[0].example}</em> 
            </p> */}
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key = {index}>
                        <p>
                            {definition.definition}
                        </p>
                        <p>
                            <em>{definition.example}</em> 
                        </p>
                    </div>    
                )
            })}
        </div>
    )
}