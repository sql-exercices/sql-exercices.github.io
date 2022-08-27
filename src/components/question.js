import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ResultsTable } from "./results";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { equal_results } from "../utility";

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
        <Stack direction="row" spacing={2}>
          <TextField
            multiline
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
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
              setCorrect(equal_results(r, expected) ? 2 : 1);
            }}
          >
            Valider
          </Button>
        </Stack>
      </Grid>

      <Stack direction="row" spacing={2}>
        {result.map(({ columns, values }, i) => (
          <ResultsTable key={i} columns={columns} values={values} />
        ))}
        {verdict}
      </Stack>
    </div>
  );
};
