import React, { useState } from "react";
import Results from "./Results"
import "./Dictionary.css"
import axios from "axios"

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState("")
    let [result, setResult] = useState(null)

    function handleResponse(response) {
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
            <section>
            <h1 className="text-center">Dictionary</h1>
            <form onSubmit={search} className="text-center">
                <input type = "search" onChange={handleKeywordChange} placeholder="Search for any word" />
            </form>
            <div className="hint">
            suggested words: cat, sport, food...
            </div>
            </section>
            <Results result = {result}/>
        </div>
    )
    
}