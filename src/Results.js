import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics"
import "./Results.css"

export default function Results(props){
    console.log(props.result)
    if (props.result){
        return (
            <div className="Results">
                <section>
                    <h2>
                        {props.result.word}
                    </h2>
                    {props.result.phonetics.map(function(phonetics, index){
                        return (
                            <div key= {index}>
                                <Phonetics phonetics = {phonetics} />
                            </div>    
                        )
                    })}
                </section>
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