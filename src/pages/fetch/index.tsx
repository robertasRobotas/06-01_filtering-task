import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const FetchPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    console.log("cocktails", cocktails);
  }, [cocktails]);

  useEffect(() => {
    fetchCocktails();
  }, []);

  useEffect(() => {
    console.log(password.length);
    if (password.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  return (
    <>
      <div className={styles.inputForm}>
        <input
          value={name}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <br />

      {isPasswordValid ? (
        <>Your Password is ok</>
      ) : (
        <>Your password sould contain 8 letters</>
      )}
    </>
  );
};

export default FetchPage;
