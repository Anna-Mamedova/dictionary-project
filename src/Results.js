import React from "react";
import Meaning from "./Meaning";

export default function Results(props){
    console.log(props.result)
    if (props.result){
        return (
            <div>
                <h2>
                    {props.result.word}
                </h2>
                <p>
                    <em>{props.result.phonetic}</em>
                </p>
                {props.result.meanings.map(function(meaning, index){
                    return (
                        <div key = {index}>
                           <Meaning meaning = {meaning} />
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}