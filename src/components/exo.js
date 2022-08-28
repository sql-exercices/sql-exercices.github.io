import React, { useState, useEffect } from "react";
import initSqlJs from "sql.js";
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import Question from "./question";

export default ({ db_url, diagram_url, questions, answers }) => {
  const [db, setDb] = useState(null);

  // https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/
  useEffect(async () => {
    try {
      const sqlPromise = initSqlJs({ locateFile: () => sqlWasm });
      const dataPromise = fetch(db_url).then((res) => res.text());
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
      const db = new SQL.Database();
      db.exec(buf);
      setDb(db); // select * from pokemons
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <div>
      <center>
        <img src={diagram_url} width="80%"></img>
      </center>
      <ol>
        {questions.map((q, i) => (
          <li>
            <Question db={db} question={q} answer={answers[i]} />
          </li>
        ))}
      </ol>
    </div>
  );
};
