import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      console.log("Phonetic Props:", props.phonetic);
      {props.phonetic.audio && (
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      )}
      <p>{props.phonetic}</p>
    </div>
  );
}
