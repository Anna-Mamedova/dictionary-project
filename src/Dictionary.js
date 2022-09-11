import React, { useState } from "react";

export default function Dictionary() {
    let [ketword, setKeyword] = useState("")

    function search(event) {
        event.preventDefault()
        alert (`${ketword}`)
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type = "search" onChange={handleKeywordChange}/>
                <input type = "submit" value = "Search"/>
            </form>
        </div>
    )
    
}