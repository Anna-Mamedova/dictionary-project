import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props){
    return (
        <div className="Phonetics">
            <span>
                {props.phonetics.text}
            </span>
            <ReactAudioPlayer
            src={props.phonetics.audio}
            controls
            />
        </div>
    )
}