import React from "react";

export default function Photos(props){
    if(props.photos){
        return (
            <section>
                <div className="row">
                {props.photos.map(function(photos, index){
                    return(
                    <div className="col-6 my-3" key={index}>
                        <img src={photos.src.landscape} alt = {photos.alt} className="img-fluid rounded"/>
                    </div>
                    )
                })}
                </div>
            </section>
        )
    } else {
        return null
    }
}