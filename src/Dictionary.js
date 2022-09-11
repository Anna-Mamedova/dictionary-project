import React, { useState } from "react";
import Results from "./Results"
import axios from "axios"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")
    let [result, setResult] = useState(null)

    function handleResponse(response) {
        console.log(response.data[0])
        setResult(response.data[0])
    }
    
    function search(event) {
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search} className="text-center">
                <input type = "search" onChange={handleKeywordChange}/>
                <input type = "submit" value = "Search"/>
            </form>
            <Results result = {result}/>
        </div>
    )
    
}