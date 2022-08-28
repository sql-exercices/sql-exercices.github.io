import React, { useState, useEffect } from "react";
import initSqlJs from "sql.js";
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import Question from "./question";

export default ({
  name,
  db_url,
  diagram_url,
  description,
  questions,
  answers,
}) => {
  const [db, setDb] = useState(null);
  useEffect(async () => {
    try {
      const sqlPromise = initSqlJs({ locateFile: () => sqlWasm });
      const dataPromise = fetch(db_url).then((res) => res.text());
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
      const db = new SQL.Database();
      db.exec(buf);
      setDb(db);
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <div>
      {diagram_url && <center>{diagram_url}</center>}
      {description && <div>{description}</div>}
      <ol>
        {questions.map((q, i) => (
          <li key={`${name}_${i}`}>
            <Question db={db} name={name} question={q} answer={answers[i]} />
          </li>
        ))}
      </ol>
    </div>
  );
};
