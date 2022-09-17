import React, { useState } from "react";
import Results from "./Results"
import Photos from "./Photos"
import "./Dictionary.css"
import axios from "axios"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")
    let [result, setResult] = useState(null)
    let [photos, setPhotos] = useState(null)

    function handleResponse(response) {
        setResult(response.data[0])
    }

    function handlePixelResponse(response){
        setPhotos(response.data.photos)
    }
    
    function search(event) {
        event.preventDefault()
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)

        let pixelApiKey = "563492ad6f917000010000017cb993b1e0ea4688801eb81f9185ac45"
        let pixelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
        axios.get(pixelUrl, { headers: { Authorization: `Bearer ${pixelApiKey}` }}).then(handlePixelResponse)
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
            <Photos photos= {photos} />
        </div>
    )
    
}