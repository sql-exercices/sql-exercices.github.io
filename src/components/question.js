import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ResultsTable } from "./results";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
var _ = require("lodash");

export default ({ db, question, answer }) => {
  const [request, setRequest] = useState("");
  const [result, setResult] = useState([{ columns: [], values: [] }]);
  const [correct, setCorrect] = useState(0);

  let verdict = <pre></pre>;
  if (correct == 1) {
    verdict = <pre>Il y a une erreur dans votre requête</pre>;
  }
  if (correct == 2) {
    verdict = <pre>Correct</pre>;
  }
  return (
    <div>
      {question}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <TextField
            multiline
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="success"
            onClick={() => {
              let expected = db.exec(answer);
              let r = db.exec(request);
              console.log(r);
              console.log(expected);
              setResult(r);
              setCorrect(_.isEqual(r, expected) ? 2 : 1);
            }}
          >
            Valider
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          {result.map(({ columns, values }, i) => (
            <ResultsTable key={i} columns={columns} values={values} />
          ))}
        </Grid>
        <Grid item>{verdict}</Grid>
      </Grid>
      {result.map(({ columns, values }, i) => (
        <ResultsTable key={i} columns={columns} values={values} />
      ))}
    </div>
  );
};
