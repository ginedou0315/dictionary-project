import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response);
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiKey = "e430a0b40t5635ffab9bc012406aa3ao";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsAPIKey = "e430a0b40t5635ffab9bc012406aa3ao";
    let pexelsAPIUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsAPIKey}`;
    axios.get(pexelsAPIUrl).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <p>What word do you want to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: abhor, life, tennis, discovery...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
