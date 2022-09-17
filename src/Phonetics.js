import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props){
   if(props.phonetics.audio) {
       return (
           <div className="Phonetics">
               <span className="audioPhonetics">
                   {props.phonetics.text}
               </span>
               <ReactAudioPlayer
               src={props.phonetics.audio}
               controls
               />
           </div>
       )
   } else {
       return (
        <div className="Phonetics">
        <span>
            {props.phonetics.text}
        </span>
    </div>
       )
   }
}