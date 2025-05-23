import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);

  if (!props.results) {
    return null;
  }
  let { word, phonetics, meanings } = props.results;
  if (!word) {
    return null;
  }
  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        {phonetics &&
          phonetics.map((phonetic, index) => {
            let key = phonetic.text
              ? `${word}-phonetic-${phonetic.text}-${index}`
              : phonetic.audio
              ? `${word}-phonetic-audio-${index}`
              : `${word}-phonetic-${index}`;
            return (
              <div key={key} className="phonetic-entry">
                {" "}
                {/* Added a class */}
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
      </section>
      {meanings &&
        meanings.map((meaning, index) => {
          // A more robust key: using partOfSpeech if available
          const key = meaning.partOfSpeech
            ? `${word}-meaning-${meaning.partOfSpeech}-${index}`
            : `${word}-meaning-${index}`;
          return (
            <section key={key} className="meaning-section">
              {" "}
              {/* Added a class */}
              <Meaning meaning={meaning} />
            </section>
          );
        })}
    </div>
  );
}
