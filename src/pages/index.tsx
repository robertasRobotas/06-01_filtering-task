import styles from "./main.module.css";
import { useState } from "react";
import uniqid from "uniqid";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [library, setLibrary] = useState(["labas"]);

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Add some text"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
      <button
        onClick={() => {
          setLibrary((prevState) => [...prevState, inputText]);
          setInputText("");
        }}
      >
        Add word
      </button>

      <input
        placeholder="Type some text to filter"
        onChange={(event) => {
          console.log("hitttt");
          const newText = event.target.value;
          setFilterText(newText);
          setLibrary((prevState) => [
            ...prevState.filter((word) => word.includes(newText)),
          ]);
        }}
        value={filterText}
      />
      <div>
        {library.map((word) => {
          return (
            <div
              onClick={() => {
                setLibrary((prevState) => {
                  return [...prevState.filter((listWord) => listWord !== word)];
                });
              }}
              className={styles.item}
              key={uniqid()}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
